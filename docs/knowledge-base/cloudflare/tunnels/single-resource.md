---
title: "Access Single Resource via Cloudflare Tunnels"
---

# Access Single Resource via Cloudflare Tunnels
Accessing an Resource deployed on Coolify using a Cloudflare Tunnel allows you to securely reach your app without exposing your server’s IP address or without having a public ip for the server. 


## Who this is for?
This setup is ideal for people who:

- Don't have a public IP for their server (could be a laptop, rasberry pi etc..).
- Are unable to port forward (e.g., using home internet or on a private network).
- Want to keep their server’s IP address private and avoid exposing it to the public internet.
- Have an app already deployed on Coolify and need an external method to access it securely.


## Setup Requirements
To follow this guide, you'll need:

- A free [Cloudflare ↗](https://cloudflare.com) account.
- You need a domain that has it's **DNS managed by Cloudflare**.
- Your Resource has to be deployed and managed with Coolify.


## Before We Start
- We assume you have Coolify running and an app already deployed.
- If your app requires HTTPS for functionality like cookies or login, then you need to follow the [Full TLS HTTPS guide ↗](/knowledge-base/cloudflare/tunnels/full-tls) after following this guide. This is because in this guide, Cloudflare will manage HTTPS externally, while your app will run over HTTP within Coolify.


## How It Works?
A simple high-level overview diagram to give you a visual idea of how this works:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/high-level-diagram.webp" />

---

### Quick Links to Important Sections:
- [Setup your app for tunneling](#_1-setup-your-app-for-tunneling)
- [Create a Cloudflare Tunnel](#_2-create-a-cloudflare-tunnel)
- [Setup Cloudflare Tunnel on Coolify](#_3-setup-cloudflare-tunnel-on-coolify)
- [Expose Mutiple Resource on Different Domains](#expose-mutiple-resource-on-different-domains)
- [Known issues and Solutions](#known-issues-and-solutions)

---

::: warning Example Data
  The following data is used as an example in this guide. Please replace it with your actual data when following the steps:
  
  - **Domain Name:** shadowarcanist.com
  - **Ports Exposes:** 80
  - **Ports Mapping:** 4477:80
:::

---


## 1. Setup your app for tunneling
To setup your app for tunneling, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/1.webp" />

1. Remove all domains from the **Domains** field.
2. Set the correct port in **Ports Exposed** (the port your app uses).
3. Set the correct ports in **Port Mappings** (left is the host port, right is the app port).
4. Deploy your app by clicking the **Deploy** button.


## 2. Create a Cloudflare Tunnel
To create a Cloudflare Tunnel, first log in to your Cloudflare account and go to the [Zero Trust ↗](https://one.dash.cloudflare.com/) page.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/2.webp" />

1. On the Zero Trust page, go to **Networks** in the sidebar.
2. Click on **Tunnels**
3. Click on **Add a tunnel** button

You will be prompted to choose a tunnel type. Click the **Select Cloudflared** button.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/3.webp" />

You will be prompted to enter a tunnel name. Choose a name that you prefer.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/4.webp" />

Next you will see the configuration page with multiple options to install cloudflared.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/5.webp" />

Copy the install command, which contains the token for your tunnel (token starts with "eyJ"). Make sure to save only the token, removing the command part before it, and store it in a safe place, as we need it later.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/6.webp" />

Scroll down until you see the **Next** button, then click it.

Then, you will be prompted to add a hostname. This is where we expose our SSH tunnel.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/7.webp" />

1. **Subdomain** - (Optional) You can make your app/resource accessible on any subdomain/domain. For this guide, we are not using a subdomain.
2. **Domain** - Choose the domain you want to use for the tunnel.
3. **Path** - Leave this field empty.
4. **Type** - Choose **HTTP** (this is very important).
5. **URL** - Enter **localhost:4477** The port 4477 is the one we mapped to the host system in [Step 1](#_1-setup-your-app-for-tunneling). Replace 4477 with your own port.
6. After filling in the details, click the **Save Tunnel** button.


## 3. Setup Cloudflare Tunnel on Coolify
To set up the tunnel on Coolify, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/8.webp" />

Go to your project on Coolify dashboard and click the **+ New** button to create a new resource.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/9.webp" />

You will see many options to deploy a new app. Search for Cloudflared and click on it.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/10.webp" />

Go to the **Environment Variables** page, enter your tunnel token, and deploy the Cloudflared app. This token was copied in [Step 2](#_2-create-a-cloudflare-tunnel)

**Congratulations**! You've successfully set up a resource that can be accessed by anyone on the internet your domain.


## Expose Mutiple Resource on Different Domains
If you want to expose different apps, you can follow our [Setup All resource guide ↗](/knowledge-base/cloudflare/tunnels/all-resource), but there's an alternate way.

Simply follow [Step 1](#_1-setup-your-app-for-tunneling) for your new app, then create a new public hostname on Cloudflare Tunnel as we did in [Step 2](#_2-create-a-cloudflare-tunnel). 

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/11.webp" />

You don't need to create new tunnels for each app, just create a new hostname and point it to the port your app is listening on.


## Known issues and Solutions
When you create a new public hostname in Step 2, Cloudflare will create a DNS record for the hostname. 

However, if a DNS record for the hostname already exists, Cloudflare won’t create a new one. 

In this case, your app won’t work. To fix this issue, follow the steps below:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/12.webp" />

First, copy your tunnel ID from the Tunnels page on the Cloudflare dashboard.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/13.webp" />

Create a new DNS record with the following details:

1. In the Cloudflare dashboard, go to **DNS**.
2. Select **Records**.
3. Add a **CNAME** record.
4. Enter the name as `*` or the name of your subdomain (this should match the hostname you have for your app on the tunnel).
5. For the **Target**, enter the tunnel ID followed by `.cfargotunnel.com`
6. Set the proxy status to **Proxied**.

Now, visit the domain of your application, and it should be accessible there.