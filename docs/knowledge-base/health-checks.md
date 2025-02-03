---
title: Health checks
---

# Health checks
Health checks are important, but not mandatory for your application. It is a way to check if your application is started properly. Coolify provides a way to configure health checks for your application.

## How it works

If you set a health check, Coolify (and integrated proxy) will check the health of your application by sending a request to the health check endpoint.

The integrated proxy only forwards the request to your application if the health check is successful. If the health check fails, the proxy will return a 502 Bad Gateway error.

## What if I do not set a health check?

You get a warning next to your application's status. It is not mandatory, but it is recommended to set a health check.
The integrated proxy will forward the request to your application without checking the health.
