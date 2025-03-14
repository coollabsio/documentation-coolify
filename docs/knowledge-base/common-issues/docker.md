---
title: "Common Issues for Docker"
description: "Here are some common issues and their solutions related to Docker."
---
# Common Issues

Here are some common issues and their solutions related to Docker.

## Expired GitHub Personal Access Token (PAT)
If you encounter the following errors, it means Docker cannot authenticate with the GitHub Container Registry (ghcr.io):

**Error 1:**
```sh
  Error response from daemon: Head "https://ghcr.io/v2/coollabsio/coolify-helper/manifests/1.0.1": unauthorized: authentication required
```

**Error 2:**
```sh
  Unable to find image 'ghcr.io/coollabsio/coolify-helper:latest' locally
  docker: Error response from daemon: Head "https://ghcr.io/v2/coollabsio/coolify-helper/manifests/latest": denied: denied
```

To resolve this issue, you have two options:
- Log out of GitHub Container Registry (ghcr.io) by running:
  ```sh
    docker logout ghcr.io
  ```
- Renew your GitHub Personal Access Token (PAT) if you need to maintain authenticated access for deployments.
