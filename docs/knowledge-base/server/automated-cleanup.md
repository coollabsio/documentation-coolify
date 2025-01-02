---
title: "Automated Cleanup"
---

Coolify automatically cleans up your servers to prevent them from running out of disk space. It will remove all the unused Docker images, containers, and volumes.

## How it works

- Coolify will run the cleanup script every 10 minutes.
- If there is an ongoing deployment, the cleanup script will be skipped - to prevent any issues, like deleting the image that is currently being used.
- The cleanup script will remove all the unused Docker images, containers, and volumes with the following commands:

```bash
# This will remove all unused Docker images
docker image prune -af
# This will remove all coolify.managed containers that are not running
docker container prune -f --filter "label=coolify.managed=true"
# This will remove all unused Docker build caches
docker builder prune -af
```
