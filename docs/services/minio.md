---
title: "MinIO"
description: "Here you can find the documentation for hosting MinIO with Coolify."
---


![MinIO](https://github.com/minio.png)

## What is MinIO?

MinIO is a high-performance, distributed object storage system. It is software-defined, runs on industry-standard hardware, and is 100% open source under the AGPL v3.0 license.

## Links

- [The official website ›](https://min.io/)

## FAQ

### Invalid login credentials

You need to run MinIO on `https` (not self-signed) to avoid this issue. MinIO doesn't support http based authentication.
