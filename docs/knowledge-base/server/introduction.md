---
title: "Introduction"
---

# Introduction

## Requirements

No matter what type of server you have (localhost or remote), you need the following requirements.

- Connectivity

  - SSH connectivity between Coolify and the server with SSH key authentication.
     <Aside type="tip">
     Your public key should be added to **root** user's `~/.ssh/authorized_keys`.
     If you do not have an SSH Key, you can generate on through Coolify with a simple button or you can generate one manually.
     </Aside>


- Docker Engine (24+)

## Types

- **Localhost**: the server where Coolify is installed.
- **Remote Server**: could be any remote linux server.

## Localhost

To be able to manage the server where Coolify is running on, the docker container of Coolify should reach the host server through SSH.

You can use localhost as a server where all your resources are running, but it is not recommended as high server usage could prevent to use Coolify.

<Aside type="tip">
  You can use our [Cloud](https://app.coolify.io) version, so you only need a
  server for your resources. You will get a few other things included with the
  cloud version, like free email notifications, s3 storage, etc based on your
  subscription plan.
</Aside>

## Remote Server

You can connect any type of servers to Coolify. It could be a VPS, a Raspberry PI or a laptop running Linux.

<Aside type="tip">
If you don't have a server or server provider yet, we prefer to use Hetzner.

You can use our [referral link](https://coolify.io/hetzner). It will helps us to keep the project alive.

</Aside>

### Cloudflare Tunnels

You can also set to use Cloudflare Tunnels for your servers.

<Aside type="tip">
Coolify does not install cloudflared on your server, it needs to be done prior.

All it does is to add the right ProxyCommand (`ProxyCommand <ip / hostname> access ssh --hostname %h`) to all ssh connections.

</Aside>

## Features

### Disk Cleanup threshold

You can set a threshold in % for your / filesystem. If this percentage is reached, Coolify tries to cleanup a lot of unnecessary files from your server.

- Unused Docker Images (`docker image prune -af'`)
- Unused Docker Build Images (`docker builder prune -af`)
- Stopped Docker Containers deployed by Coolify (`docker container prune -f --filter "label=coolify.managed=true"`)

### Wildcard Domain

You can set a wildcard domain (`example: http://example.com`) to your server, so you can easily assign generated domains to all the resources connected to this server.

Example: Your application UUID is `vgsco4o`.

If you have the example set, you will get the following FQDN: `http://vgsco4o.example.com`

If you do not have any wildcard domain set, Coolify will generate a [sslip.io](https://sslip.io) domain, which is free & magical domain that you can use anywhere.

In this case, it will be: `http://vgsco4o.127.0.0.1.sslip.io`, where `127.0.0.1` is your server's IP.

## Proxy

- **Traefik**: Automatically configure Traefik(v2) based on your deployed resources.
- **Custom/None**: You will configure a proxy manually (only for advanced users).

<Aside type="tip">
  Soon we will support Nginx & Caddy with fully automated configuration.
</Aside>

### Traefik

Coolify uses Traefik proxy by default to create a reverse proxy for your resources.

<Aside type="tip">
  Traefik only starts when you did not select any proxy for your server and you
  have a domain configured for a resource or your Coolify instance itself.
</Aside>

#### Dynamic Configuration

You can always add your own configuration to the proxy settings from Coolify's UI (`/server/<server_uuid>/proxy`).
