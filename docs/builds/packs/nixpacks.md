---
title: Nixpacks Build Pack
---

<ZoomableImage src="/docs/images/builds/packs/nixpacks/nixpacks-banner.webp" />

<br />

Nixpacks is a open source build pack created by [Railway](railway.com) and the source is avianle on [github](). Coolify uses Nixpacks as one of the build pack.


## How Nixpacks works?
Nixpacks checks your git repository (also called as "source directory" in nixpacks) and generates a Dockerfile, then it will build a docker image based on the Dockerfile it generated.


## How to use Nixpacks on Coolify?
On Coolify you can only Nixpacks on git-based deployments.

1. Create a new resource on Coolify by clicking the "+ new" button
<ZoomableImage src="/docs/images/builds/packs/nixpacks/nixpacks.1" />

1. Choose your git-based deployment option. For this guide we will choose "Public Repository" option
<ZoomableImage src="/docs/images/builds/packs/nixpacks/nixpacks.2" />

1. Enter the link of your github repository and click on "Check Repository" button
<ZoomableImage src="/docs/images/builds/packs/nixpacks/nixpacks.3" />

1. Select **Nixpacks** as Build Pack.
<ZoomableImage src="/docs/images/builds/packs/nixpacks/nixpacks.4" />


## How to deploy Fully Static Website?
First you have to follow the previous section on this docs [How to use Nixpacks on Coolify?]() then follow the below steps
<ZoomableImage src="/docs/images/builds/packs/nixpacks/nixpacks.webp" />

1. **Branch:** Coolify will automatically detect the branch from your Repostiory.

2. **Base Directory:** Enter the directory which Nixpack should use as root directory, if you enter `/` then Nixpacks will use the top of the file strcuture as root. 
    - If you have a monorepo then you can enter the path of the directory you want to use as base directory (`/backend` for example)

3. **Is it a static Site?:** Click on this option to enable it

4. **Port:** Once you enabled `Is it a static Site` the port will be automatically set to `80` and you cannot change it. (This is intentional)

5. **Publish Directory:** Once you enabled `Is it a static Site` this publish directory option will visible on the UI. You have to enter the output directory where your application generates the static generated file, most static site generators generates the static files on `/dist`

6. Click on **Continue** button once you have set all the above settings to correct details.







<!-- ## How to deploy Non-Static Applications/Website?
First you have to follow the previous section on this docs [How to use Nixpacks on Coolify?]() then follow the below steps
<ZoomableImage src="/docs/images/builds/packs/nixpacks/nixpacks.webp" />

1. **Branch:** Coolify will automatically detect the branch from your Repostiory.
2. **Base Directory:** Enter the directory which Nixpack should use as root directory, if you enter `/` then Nixpacks will use the top of the file strcuture as root. 
    - If you have a monorepo then you can enter the path of the directory you want to use as base directory (`/backend` for example)
3. **Port:** Enter the port where you application listens for incoming requests
4. **Is it a static Site?:** Leave this as un-checked since we are not deploying a fully static website. -->