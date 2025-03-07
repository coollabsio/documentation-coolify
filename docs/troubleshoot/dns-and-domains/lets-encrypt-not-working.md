---
title: Let's Encrypt Not Generating SSL Certificates on Coolify
---


# Let's Encrypt Not Generating SSL Certificates
If you are using the default settings for the Coolify proxy and your website suddenly shows a warning about an insecure connection, it is most likely that your website is using a self-signed certificate from the Coolify proxy. This guide will help you fix the issue.


## 1. Understand the HTTP Challenge
Coolify uses [Let's Encrypt ↗](https://letsencrypt.org?utm_source=coolify.io) under the hood to generate SSL certificates for your websites. By default, Let's Encrypt uses an HTTP challenge to verify domain ownership. 

Let's Encrypt sends an HTTP request to your server that includes a unique token embedded in the URL. When your server returns the correct token, it confirms that you control the domain.


## 2. Check Port 80 Accessibility
Make sure your server’s port 80 is open and accessible from the internet. If port 80 is blocked, Let's Encrypt cannot complete the HTTP challenge. Unblocking port 80 should fix this issue.


## 3. Usage of Third-Party Proxy
If you are proxying your website through a third-party service like [Cloudflare ↗](https://www.cloudflare.com?utm_source=coolify.io), Let's Encrypt may not be able to verify your domain. In that case, you must either use a DNS challenge or stop proxying your domain through the third-party service.


## 4. Note on Certificate Validity
Let's Encrypt certificates are valid for 90 days. If the certificate stored on your server is valid, your domain may appear to work fine even if port 80 is closed or your domain is being proxied, because Coolify continues to use that valid certificate till it expires.


## 5. Check Let's Encrypt Service Status
Sometimes, Let's Encrypt might be having issues on their end. Check the Let's Encrypt status from [here ↗](https://letsencrypt.status.io?utm_source=coolify.io). If there is an issue, wait for them to fix it and try again once the issue is fixed.


## 6. Force Regenerate Certificates
If the certificates stored on your server are corrupted or outdated, you can delete them and force Coolify generate new ones.  
- Open your server terminal and run:  
  ```bash
  rm /data/coolify/proxy/acme.json
  ```  
- Then, restart the Coolify proxy from the dashboard by clicking the Restart Proxy button.
  ::: details Guide: How to Restart Proxy from Dashboard?

  1. Select your server on the Coolify Dashboard
  <ZoomableImage src="/docs/images/troubleshoot/dns-and-domains/lets-encrypt-not-working/1.webp" />

  2. Click on Restart Proxy button
  <ZoomableImage src="/docs/images/troubleshoot/dns-and-domains/lets-encrypt-not-working/2.webp" />
  :::


## 7. Check Your WAF Settings
If you are using a Web Application Firewall (WAF), make sure it is not blocking Let's Encrypt requests.


## 8. Check Coolify Proxy logs
On the Coolify proxy logs if you see an error message with a 429 status code, it means that Let's Encrypt has rate-limited your server's IP address. 

In this case, wait for a while and check your domain again. Most users won't encounter this, but it can happen if you are using a shared IP address.
  ::: details Guide: How to check Coolify proxy logs?

  1. Select your server on the Coolify Dashboard
  <ZoomableImage src="/docs/images/troubleshoot/dns-and-domains/lets-encrypt-not-working/1.webp" />

  2. Go to the proxy section and click the refresh button
  <ZoomableImage src="/docs/images/troubleshoot/dns-and-domains/lets-encrypt-not-working/3.webp" />
  :::

## Support
If none of the above steps work, try these additional options:
- **Community Help:** Join our [Discord community ↗](https://coolify.io/discord) and post in the support forum channel.
- **What to Share:** Include a description of your issue, any error messages, and the steps you have already tried.