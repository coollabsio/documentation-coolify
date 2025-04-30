# Stage 1: Builder stage using the optimized Bun image (oven/bun:1.2.11-alpine, linux/arm64)
FROM oven/bun:1.2.11-alpine AS builder

# Set the working directory for the build
WORKDIR /app

RUN apk add --no-cache git

# Copy the project files from the build context into the container
COPY apps/docs-site .

# Install dependencies and build the project (output will be in the "out" directory)
RUN bun install && \
    bun run build

# Stage 2: Final NGINX image (nginxinc/nginx-unprivileged:alpine3.21-slim, linux/arm64)
FROM nginxinc/nginx-unprivileged:alpine3.21-slim AS final

# Copy the NGINX config file from the deployment folder
COPY deployment/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the output of the build from the builder stage into the NGINX html directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 to allow traffic
EXPOSE 80

# The default command to run the NGINX server
CMD ["nginx", "-g", "daemon off;"]
