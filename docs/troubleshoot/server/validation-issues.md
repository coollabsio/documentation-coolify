---
title: Server Validation Issues
description: Here are some common issues for fixing server validation issues.
---

# Server Validation Issues

You cannot validate your server because of a validation error. 

## Symptoms
- During validation you receive a `error in libcrypto` error.

## Solution
Check your private key added to Coolify if it is correct, it is probably missing a few things, like `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`.
