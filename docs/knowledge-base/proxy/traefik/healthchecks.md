---
title: "Healthcheck"
---

For Traefik to be able to route traffic to your services, it needs to know if they are healthy or not. This is done by using healthchecks.

## Enabled

If your resource has healthchecks enabled, Traefik will only route traffic to it if the healthcheck passes. If the healthcheck fails, Traefik will not route traffic to the resource.

**It will cause the resource to be 404'd.**

## Disabled

If your resource has healthchecks disabled, Traefik will route traffic to it regardless of the healthcheck status.

You can disable healthchecks on Coolify's UI in your resource's settings.

## Which one should I use?

It is recommended to enable healthchecks for all your resources. This way, you can ensure that only healthy resources are receiving traffic.

But if you cannot set up healthchecks for some reason, you can disable them.

Just be aware that if the resource is unhealthy, it will still receive traffic.
