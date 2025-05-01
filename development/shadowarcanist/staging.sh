#!/bin/bash
set -e
set -o pipefail


# ==================================================
# Import ENV from .env.staging
# ==================================================
source "$(dirname "$0")/.env.staging"

# ==============================================================================
# SECTION 2: GLOBAL VARIABLES
# ==============================================================================

# Record the start time of the script to measure total runtime later.
START_TIME=$(date +%s)

# Global variable to hold the Process ID (PID) of the SSH tunnel. This allows for later termination.
SSH_PID=""

# ==============================================================================
# SECTION 3: FUNCTION DEFINITIONS
# ==============================================================================

# ------------------------------------------------------------------------------
# Function: log
# Purpose : Logs a message with a timestamp to the console.
# Input   : A string message to log.
# ------------------------------------------------------------------------------
log() {
  local message="$1"
  # Print the timestamped message to the console.
  echo "$(date +"%Y-%m-%d %H:%M:%S") - $message"
}

# ------------------------------------------------------------------------------
# Function: send_discord_notification
# Purpose : Sends a rich embed notification to a Discord channel using a webhook.
# Inputs  : 
#   $1 - Discord webhook URL.
#   $2 - Title for the embed.
#   $3 - Description or content of the embed.
#   $4 - Color code (number) for the embed sidebar.
# ------------------------------------------------------------------------------
send_discord_notification() {
  local webhook_url="$1"
  local title="$2"
  local description="$3"
  local color="$4"

  # Build a JSON payload using jq to format the embed message correctly.
  local json_payload
  json_payload=$(jq -n \
    --arg title "$title" \
    --arg description "$description" \
    --argjson color "$color" \
    '{
      "embeds": [
        {
          "title": $title,
          "description": $description,
          "color": $color
        }
      ]
    }'
  )

  # Send the JSON payload via a POST request to the Discord webhook.
  curl -s -X POST -H "Content-Type: application/json" -d "$json_payload" "$webhook_url"
}

# ------------------------------------------------------------------------------
# Function: send_plain_discord_failure
# Purpose : Sends a simple plain text message to Discord via a webhook.
# Inputs  :
#   $1 - Discord webhook URL.
#   $2 - Message content.
# ------------------------------------------------------------------------------
send_plain_discord_failure() {
  local webhook_url="$1"
  local message="$2"
  # Use curl to POST the message as JSON data.
  curl -X POST -H "Content-Type: application/json" \
    -d "{\"content\": \"$message\"}" \
    "$webhook_url"
}

# ------------------------------------------------------------------------------
# Function: cleanup
# Purpose : Cleans up resources on exit, such as terminating the SSH tunnel and removing the Docker registry container.
# Notes   : This function is triggered automatically on script exit, SIGINT, or SIGTERM.
# ------------------------------------------------------------------------------
cleanup() {
  # Check if the SSH tunnel is still running using its stored PID.
  if [ -n "$SSH_PID" ] && ps -p "$SSH_PID" > /dev/null 2>&1; then
    # Attempt to kill the SSH tunnel process and log the result.
    kill "$SSH_PID" && log "[ RunnerManager ] [ Success ] SSH tunnel (PID: $SSH_PID) terminated." || log "[ RunnerManager ] [ Warning ] Failed to terminate SSH tunnel (PID: $SSH_PID)."
  fi
  # Check if the Docker registry container is present (even if stopped).
  if docker ps -a --filter "name=registry" | grep -q "registry"; then
    # Forcefully remove the Docker registry container to free resources.
    docker rm -f registry > /dev/null 2>&1 && log "[ RunnerManager ] [ Success ] Docker registry terminated." || log "[ RunnerManager ] [ Error ] Failed to remove Docker registry container."
  fi
}
# Register the cleanup function to run on script exit or when receiving termination signals.
trap cleanup EXIT SIGINT SIGTERM

# ==============================================================================
# SECTION 4: MAIN SCRIPT EXECUTION
# ==============================================================================

# Log the initialization of the runner.
log "[ RunnerManager ] [ Info ] Initialized $RUNNER_TARGET_NAME Runner."

# -------------------------------
# Step 1: Build Docker Image
# -------------------------------
# This step builds a Docker image using the Dockerfile in the current directory.
log "[ RunnerManager ] [ Info ] Initiated Docker Image Build Process."
DOCKER_BUILD_START_TIME=$(date +%s)  # Record the start time for building the image.
# Build the Docker image and tag it with IMAGE_NAME:DOCKER_TAG.
if ! docker build -f "$DOCKERFILE_PATH" -t "$IMAGE_NAME:$DOCKER_TAG" "$PROJECT_ROOT" > /dev/null 2>&1; then
  # If the Docker build fails, notify via Discord and exit.
  send_plain_discord_failure "$DISCORD_WEBHOOK_FAILURE" "[ <t:$(date +%s):T> (<t:$(date +%s):R>) ] [ $RUNNER_TARGET_NAME ] Failed to build Docker Image. $DISCORD_ALERT_PING"
  exit 1
fi

# Determine the size of the built Docker image for logging.
IMAGE_SIZE_BYTES=$(docker image inspect "$IMAGE_NAME:$DOCKER_TAG" --format='{{.Size}}')
# Convert the image size to MB or GB for readability.
if [ "$IMAGE_SIZE_BYTES" -lt 1073741824 ]; then
  IMAGE_SIZE=$(awk "BEGIN {printf \"%.2f MB\", $IMAGE_SIZE_BYTES/1024/1024}")
else
  IMAGE_SIZE=$(awk "BEGIN {printf \"%.2f GB\", $IMAGE_SIZE_BYTES/1024/1024/1024}")
fi
log "[ RunnerManager ] [ Success ] Docker Image Built with Size: $IMAGE_SIZE."

# -------------------------------
# Step 2: Start Docker Registry (if not running)
# -------------------------------
log "[ RunnerManager ] [ Info ] Fetching Docker Registry Status."
if ! docker ps --filter "name=registry" --filter "status=running" | grep -q "registry"; then
  if ! docker run -d -p 5001:5000 --name registry --tmpfs /var/lib/registry registry:2 > /dev/null 2>&1; then
    send_plain_discord_failure "$DISCORD_WEBHOOK_FAILURE" "[ <t:$(date +%s):T> (<t:$(date +%s):R>) ] [ $RUNNER_TARGET_NAME ] Failed to start Docker Registry. $DISCORD_ALERT_PING"
    exit 1
  fi
  log "[ RunnerManager ] [ Success ] Docker registry was offline. Started it now."
else
  log "[ RunnerManager ] [ Success ] Docker registry is already running."
fi

# -------------------------------
# Step 3: Push Docker Image to Registry
# -------------------------------
log "[ RunnerManager ] [ Info ] Initiated Docker image upload to registry."
docker tag "$IMAGE_NAME:$DOCKER_TAG" "localhost:5001/$IMAGE_NAME:$DOCKER_TAG" > /dev/null 2>&1
if ! docker push "localhost:5001/$IMAGE_NAME:$DOCKER_TAG" > /dev/null 2>&1; then
  send_plain_discord_failure "$DISCORD_WEBHOOK_FAILURE" "[ <t:$(date +%s):T> (<t:$(date +%s):R>) ] [ $RUNNER_TARGET_NAME ] Failed to push Image to Registry. $DISCORD_ALERT_PING"
  exit 1
fi
log "[ RunnerManager ] [ Success ] Docker image uploaded to registry."

# -------------------------------
# Step 4: Create SSH Tunnel to VPS
# -------------------------------
log "[ RunnerManager ] [ Info ] Initiated SSH tunnel to VPS."
ssh -i "$SSH_KEY_FILE" -p "$VPS_PORT" -o ExitOnForwardFailure=yes -o ServerAliveInterval=30 -N -R 5000:localhost:5001 "$VPS_USERNAME@$VPS_IP" &
SSH_PID=$!
sleep 2
if ! ps -p "$SSH_PID" > /dev/null 2>&1; then
  send_plain_discord_failure "$DISCORD_WEBHOOK_FAILURE" "[ <t:$(date +%s):T> (<t:$(date +%s):R>) ] [ $RUNNER_TARGET_NAME ] Failed to setup SSH Tunnel to Remote Server. $DISCORD_ALERT_PING"
  exit 1
fi
log "[ RunnerManager ] [ Success ] SSH tunnel established (PID: $SSH_PID)."

# -------------------------------
# Step 5: Trigger Coolify Deployment
# -------------------------------
log "[ RunnerManager ] [ Info ] Triggered Coolify Deployment."
if ! curl -s -X POST "$COOLIFY_TRIGGER_API_URL" -H "Authorization: Bearer $COOLIFY_API_TOKEN" > /dev/null 2>&1; then
  send_plain_discord_failure "$DISCORD_WEBHOOK_FAILURE" "[ <t:$(date +%s):T> (<t:$(date +%s):R>) ] [ $RUNNER_TARGET_NAME ] Failed to trigger Coolify deployment. $DISCORD_ALERT_PING"
  exit 1
fi

# -------------------------------
# Step 6: Poll Coolify API for Deployment Status
# -------------------------------
log "[ RunnerManager ] [ Info ] Asking Coolify for deployment status"
poll_start_time=$(date +%s)
deployment_complete=false
while true; do
  current_time=$(date +%s)
  elapsed=$(( current_time - poll_start_time ))
  if [ $elapsed -ge $DEPLOY_POLL_TIMEOUT ]; then
    log "[ RunnerManager ] [ Error ] Deployment polling timed out after ${DEPLOY_POLL_TIMEOUT}s."
    send_plain_discord_failure "$DISCORD_WEBHOOK_FAILURE" "[ <t:$(date +%s):T> (<t:$(date +%s):R>) ] [ $RUNNER_TARGET_NAME ] Deployment polling timed out after ${DEPLOY_POLL_TIMEOUT}s. $DISCORD_ALERT_PING"
    exit 1
  fi

  response=$(curl -s -X GET "$COOLIFY_LIST_API_URL" -H "Authorization: Bearer $COOLIFY_API_TOKEN")
  if echo "$response" | grep -q "$COOLIFY_TARGET_APP_UUID"; then
    log "[ RunnerManager ] [ Info ] Deployment is still in progress, checking again in $DEPLOY_POLL_INTERVAL seconds."
  else
    log "[ RunnerManager ] [ Success ] Deployment completed."
    deployment_complete=true
    break
  fi

  sleep "$DEPLOY_POLL_INTERVAL"
done

# -------------------------------
# Step 7: Terminate SSH Tunnel
# -------------------------------
log "[ RunnerManager ] [ Info ] Terminating SSH tunnel."
if [ -n "$SSH_PID" ] && ps -p "$SSH_PID" > /dev/null 2>&1; then
  kill "$SSH_PID" && log "[ RunnerManager ] [ Success ] SSH tunnel (PID: $SSH_PID) terminated." || log "[ RunnerManager ] [ Warning ] Failed to terminate SSH tunnel (PID: $SSH_PID)."
  SSH_PID=""
else
  log "[ RunnerManager ] [ Info ] SSH tunnel already terminated."
fi

# -------------------------------
# Step 8: Cleanup Docker Images
# -------------------------------
log "[ RunnerManager ] [ Info ] Initiated Docker images cleanup."
if ! docker rmi "$IMAGE_NAME:$DOCKER_TAG" > /dev/null 2>&1; then
  log "[ RunnerManager ] [ Error ] Failed to remove local Docker image: ($IMAGE_NAME:$DOCKER_TAG)."
  send_plain_discord_failure "$DISCORD_WEBHOOK_FAILURE" "[ <t:$(date +%s):T> (<t:$(date +%s):R>) ] [ $RUNNER_TARGET_NAME ] Failed to remove local Docker Image ($IMAGE_NAME:$DOCKER_TAG). $DISCORD_ALERT_PING"
fi
if ! docker rmi "localhost:5001/$IMAGE_NAME:$DOCKER_TAG" > /dev/null 2>&1; then
  log "[ RunnerManager ] [ Error ] Failed to remove pushed Docker image: (localhost:5001/$IMAGE_NAME:$DOCKER_TAG)."
  send_plain_discord_failure "$DISCORD_WEBHOOK_FAILURE" "[ <t:$(date +%s):T> (<t:$(date +%s):R>) ] [ $RUNNER_TARGET_NAME ] Failed to remove Docker Image on Registry (localhost:5001/$IMAGE_NAME:$DOCKER_TAG). $DISCORD_ALERT_PING"
fi
log "[ RunnerManager ] [ Success ] Docker images cleanup completed."

# -------------------------------
# Step 9: Calculate Total Runtime
# -------------------------------
END_TIME=$(date +%s)
TOTAL_TIME=$(( END_TIME - START_TIME ))
MINUTES=$(( TOTAL_TIME / 60 ))
SECONDS=$(( TOTAL_TIME % 60 ))
if [ "$MINUTES" -gt 0 ]; then
  FORMATTED_TIME="${MINUTES}m ${SECONDS}s"
else
  FORMATTED_TIME="${SECONDS}s"
fi

# -------------------------------
# Step 10: Final Discord Notification
# -------------------------------
DISCORD_MESSAGE="
** **
**Docker Stats**
> - **Image Name:** $IMAGE_NAME
> - **Image Tag:** $DOCKER_TAG
> - **Image Size:** $IMAGE_SIZE
** **
**Runner Stats**
> - **Started on:** <t:$START_TIME:T>
> - **Ended on:** <t:$END_TIME:T>
> - **Total Runtime:** $FORMATTED_TIME"
send_discord_notification "$DISCORD_WEBHOOK_SUCCESS" "[ $RUNNER_TARGET_NAME ] Deployment Success!" "$DISCORD_MESSAGE" 0

log "[ RunnerManager ] [ Result ] $RUNNER_TARGET_NAME Runner execution completed, total runtime: $FORMATTED_TIME."

exit 0
