---
title: "Common Issues with Cloudflare  and Coolify"
---

# Common Issues with Cloudflare and Coolify
When using Coolify with Cloudflare, there are a few known issues. Below are the issues and their solutions:

- [Slow Coolify UI Performance or Pages Not Loading](#_1-slow-coolify-ui-performance-or-pages-not-loading)


## 1. Slow Coolify UI Performance or Pages Not Loading  
If you’re using a Cloudflare-managed domain and experience slow UI performance or pages not loading correctly, the issue is likely caused by Cloudflare’s [Rocket Loader ↗](https://developers.cloudflare.com/speed/optimization/content/rocket-loader/) feature.  

**Rocket Loader** is known to cause significant issues with Coolify’s UI and overall performance. It’s highly recommended to disable it when using Coolify.  


To disable Rocket Loader, follow these steps:  

<ZoomableImage src="/docs/images/common-issues/cloudflare/rocket-loader.webp" />

1. In your [Cloudflare dashboard ↗](https://dash.cloudflare.com/) go to **Speed**.
2. Go to **Optimization**.
3. Go to **Content Optimization**.
4. Switch the toggle to **Off** for Rocket Loader

