---
title: "Server SSH Access via Cloudflare Tunnels"
---

# Server SSH Access via Cloudflare Tunnels
Accessing your server using SSH over a Cloudflare Tunnel is a secure and easy way to connect to a remote server while keeping its IP address hidden. 

This guide explains how to set it up using Coolify's automated cloudflare tunnel installation.


## Who this is for?
This setup is ideal for people who:

- Want to keep their server's IP address private.
- Want to close all SSH ports on their server.
- Don’t want to rely on static public IPs for accessing their remote server.


## Setup Requirements
To use Coolify's automated setup for a Cloudflare Tunnel:

- Your remote server must have a **public IP address** and an **active SSH port** during the initial setup for Coolify to configure the tunnel. After setup, you can close all ports on the server.
- If your server doesn’t have a public IP address, then this tutorial is **not for you**. Please follow the [manual setup guide ↗](/knowledge-base/cloudflare/tunnels/manual-setup) instead.
- You need a domain that has it's **DNS managed by Cloudflare**.


## Before We Start
- We assume you already have a server running Coolify and you are looking to set up a tunnel to connect a different server to Coolify.
- If you are trying to set up a tunnel on the server where Coolify is running and you don’t have any other servers to connect, you don’t need a SSH tunnel. Coolify already has full root access to the server it’s running on, so there’s no need for an SSH tunnel in this case.


## How It Works?
A simple high-level overview diagram to give you a visual idea of how this works:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/high-level-diagram.webp" />

---

### Quick Links to Important Sections:
- [Create a Private SSH Key](#_1-create-a-private-ssh-key)
- [Add Public Key to Your Server](#_2-add-public-key-to-your-server)
- [Add your Server to Coolify](#_3-add-your-server-to-coolify)
- [Validate your Server on Coolify](#_4-validate-your-server-on-coolify)
- [Create a Cloudflare Tunnel](#_5-create-a-cloudflare-tunnel)
- [Setup Cloudflare Tunnel on Coolify](#_6-setup-cloudflare-tunnel-on-coolify)

---

::: warning Example Data
  The following data is used as an example in this guide. Please replace it with your actual data when following the steps:
  
  - **IPv4 Address of Origin Server:** 203.0.113.1
  - **Domain Name:** shadowarcanist.com
  - **Username:** root
  - **SSH Port:** 22
:::

---

## 1. Create a Private SSH Key
To create a Private SSH Key, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/1.webp" />

1. In your Coolify Dashboard, go to **Keys & Tokens**
2. Click the **+ Add** button

You will be prompted to choose a key type, along with providing a name and description for the key.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/2.webp" />

1. Click on Generate new **ED25519** or **RSA** button to generate a new SSH key. 
2. Copy the public key and save it somewhere safe (you'll need it in the next step). Then, click Continue.


## 2. Add Public Key to Your Server
SSH into the server you want to connect to Coolify:
```sh
  ssh root@203.0.113.1
```

Once logged in, add your public key to the authorized keys file:
```sh
  $ echo "<PASTE YOUR PUBLIC KEY INSIDE OF THESE QUOTES>" >> ~/.ssh/authorized_keys
```


## 3. Add your Server to Coolify
To add your server to Coolify, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/3.webp" />

1. In your Coolify Dashboard, go to **Servers**
2. Click the **+ Add** button

You will be prompted to enter details about your server. Make sure the information you provide is accurate, as Coolify will use these details to access your server.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/4.webp" />

1. **Name** - Choose a name to easily identify your server in the dashboard.
2. **Description** - (Optional) Provide a description for your server.
3. **IP Address/Domain** - Enter the public IP address of your server.
4. **Port** - Enter the port number your server uses for SSH connections.
5. **User** - Enter the username Coolify will use (it should have root privileges on the server).
6. **Private key** - Select the private key you created in [Step 1](#_1-create-a-private-ssh-key)
7. After filling in the details, click the **Continue** button.


## 4. Validate your Server on Coolify
To validate your server, simply click the **Validate Server & Install Docker Engine** button.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/5.webp" />

During this process, Coolify will log in to your server and set up everything needed for Coolify to use the server.

Once the validation is completed, your server page will look like this:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/6.webp" />


## 5. Create a Cloudflare Tunnel
To create a Cloudflare Tunnel, first log in to your Cloudflare account and go to the [Zero Trust ↗](https://dash.cloudflare.com/sign-up) page (located in the sidebar on the homepage of the dashboard)..

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/7.webp" />

1. On the Zero Trust page, go to **Networks** in the sidebar.
2. Click on **Tunnels**
3. Click on **Add a tunnel** button

You will be prompted to choose a tunnel type. Click the **Select Cloudflared** button.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/8.webp" />

You will be prompted to enter a tunnel name. Choose a name that you prefer.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/9.webp" />

Next you will see the configuration page with multiple options to install cloudflared.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/10.webp" />

Copy the install command, which contains the token for your tunnel (token starts with "eyJ"). Make sure to save only the token, removing the command part before it, and store it in a safe place, as we need it later.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/11.webp" />

Scroll down until you see the **Next** button, then click it.

Then, you will be prompted to add a hostname. This is where we expose our SSH tunnel.<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/12.webp" />

1. **Subdomain** - (Optional) You can make SSH accessible on any subdomain. For this guide, we are using the subdomain **ssh**.
2. **Domain** - Choose the domain you want to use for the tunnel.
3. **Path** - Leave this field empty.
4. **Type** - Choose **SSH** (this is very important).
5. **URL** - Enter **localhost:22** If your SSH port is different from 22, use that port instead.
6. After filling in the details, click the **Save Tunnel** button.


## 6. Setup Cloudflare Tunnel on Coolify
To set up the tunnel on Coolify, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/13.webp" />

Go to the **Servers** page and select the server you want to connect. This is the server you added in [Step 3](#_3-add-your-server-to-coolify)

1. Click on **Cloudflare Tunnels**
2. Click on **Automated** button

You will be prompted to enter the Tunnel Token and SSH domain.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/14.webp" />

1. Enter your **Tunnel Token** (this is the token we copied in [Step 5](#_5-create-a-cloudflare-tunnel))
2. Enter your **SSH Domain** (this is the subdomain we set up in [Step 5](#_5-create-a-cloudflare-tunnel))
3. Click on **Continue** button.

Coolify will now install **cloudflared** on the server and set everything up automatically. This process will take about 30 seconds to 1 minute.

Once completed, you will see that the Cloudflare tunnel is enabled on the Cloudflare Tunnels page, like this:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/15.webp" />

At this point, your server's IP address will be automatically updated to the SSH domain by Coolify.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/16.webp" />

You can now block your SSH port on the server if you wish.

**Congratulations**! You've successfully set up a server that can be accessed by Coolify over SSH using Cloudflare tunnels via your domain.