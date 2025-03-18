---
title: Failed To Get Access Token During Deployment
description: Here are some common issues for fixing failed to get access token during deployment.
---

# Failed To Get Access Token

Your deployment failed because it cannot get the access token from GitHub.

The error is usually related to NTP time synchronization issue.


## Error
`'Issued at' claim (iat) must be an Integer representing the time that assertation issued.`


## Solution
You must do the same as the [2FA Stopped Working](/troubleshoot/server/two-factor-stopped-working) solution.
