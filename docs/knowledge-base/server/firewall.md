---
title: "Firewall"
---

# Self-hosted version

For self-hosting Coolify, you need to allow some ports on your firewall.

- For Coolify: `8000` (http), `6001` (websocket), `6002` (terminal), and `22` (SSH, or a custom port) (required)

<Aside type="tip">
  8000, 6001, 6002 can be closed when accessing Coolify through a domain and using the integrated reverse proxy (Traefik or Caddy).
</Aside>

- Reverse Proxy: `80, 443` (optional)

<Aside type="caution">
  If you are using `Oracle Cloud Free ARM Server`, you need to allow these ports
  inside Oracle's Dashboard, otherwise you cannot reach your instance from the
  internet after installation.
</Aside>

### GitHub integration
- [Detailed Guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).

#### Webhooks
You need to allow TCP port `80` or `443` for GitHub webhooks.

To specify the IP addresses (optional), you can use the following API endpoint to get them:

- https://api.github.com/meta - Check `hooks` section.

### Terminal

Since 4.0.0-beta.336, you need to allow TCP port `6002` for terminal access on `/terminal` endpoint.

<Aside type="tip">
  If you are using the integrated reverse proxy (Traefik or Caddy), the terminal is accessible on `https://your-domain.com/terminal` with dynamic proxy configuration.
</Aside>


## Cloud version

If you need the public facing IPs to allow inbound connections to your servers, here is an up-to-date list of IPs that you can use to whitelist:

- https://coolify.io/ipv4.txt
- https://coolify.io/ipv6.txt
