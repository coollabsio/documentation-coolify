---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Coolify"
  text: "Open source PaaS for self-hosting apps"
  tagline: Self-host your own databases, services (like Wordpress, Plausible Analytics, Ghost) and applications (like Next.js, Nuxt.js, Remix, SvelteKit) with ease.
  actions:
    - theme: brand
      text: Get Started
      link: /home/what-is-coolify
    - theme: alt
      text: View Source Code
      link: https://github.com/coollabsio/coolify


features:
  - title: Any Language
    details: Compatible with a wide range of programming languages and frameworks.
    icon: <svg width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M1.5 5.5H6a2 2 0 1 0-2-2m-2.5 5H12A2.5 2.5 0 1 0 9.5 6m-2 7A1.5 1.5 0 1 0 9 11.5H5.5m-4 0h2"/></svg>
  - title: Any Server
    details: You can deploy your resources to any server, including your own servers, VPS, Raspberry Pi etc..
    icon: <svg width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M2.85 9.301a.644.65 0 0 1-.502-1.06L8.72 1.605a.322.325 0 0 1 .554.3L8.039 5.82a.644.65 0 0 0 .605.878h4.506a.644.65 0 0 1 .502 1.06L7.28 14.395a.322.325 0 0 1-.554-.3l1.236-3.916a.644.65 0 0 0-.605-.878Z"/></svg>
  - title: Containerization
    details: Resources are containerized for better performance and security
    icon: <svg width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5H11l.75-.5a5.35 5.35 0 0 1 0-3.5c1 .6 1 1.88 1.74 2c.77-.09 1.23.01 2 .52c0 0-.97 1.77-2.5 1.98c-1.93 3.65-4.5 5.5-6.98 5.5C0 14.5.5 8.5.5 8.5m1 0v-2m0 0h8m-6 2v-4m0 0h4m-2-2h2m-2 6v-6m2 6v-6m2 6v-2"/></svg>
  - title: Notifications
    details: Configurable alerts for CPU, memory, disk and deployments.
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5a97f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/><path d="M22 8c0-2.3-.8-4.3-2-6"/></svg>
  - title: Collaborative
    details: Share your projects with your team members and work together on them
    icon: <svg width="32" height="32" viewBox="0 0 256 256"><path fill="#f5bde6" d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.4-4.9 8 8 0 0 1 0-6.2 8 8 0 0 1 7.4-4.9 24 24 0 1 0-23.2-30 8 8 0 1 1-15.5-4 40 40 0 1 1 65.7 39.5 68 68 0 0 1 27.4 21.7 8 8 0 0 1-1.6 11.2M190.9 212a8 8 0 1 1-13.8 8 57 57 0 0 0-98.2 0 8 8 0 1 1-13.8-8 72 72 0 0 1 33.7-30 48 48 0 1 1 58.4 0 72 72 0 0 1 33.7 30M128 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32m-56-56a8 8 0 0 0-8-8 24 24 0 1 1 23.2-30 8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.5a68 68 0 0 0-27.4 21.7 8 8 0 1 0 12.8 9.6A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8"/></svg>
  - title: OAuth / OIDC
    details: Supports multiple OAuth2 providers.
    icon: <svg width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10.5a4.5 4.5 0 1 0-4.02-2.48L1.5 12.5v2h2v-2h2v-2h2l.48-.48c.6.3 1.3.48 2.02.48"/><path d="M12 5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1"/></g></svg>
  - title: Automatic backups
    details: Data is automatically backed up to any S3 compatible solution
    icon: <svg width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M8 6.5c3.59 0 6.5-1.4 6.5-2.68S11.59 1.5 8 1.5S1.5 2.54 1.5 3.82S4.41 6.5 8 6.5M14.5 8c0 .83-1.24 1.79-3.25 2.2s-4.49.41-6.5 0S1.5 8.83 1.5 8m13 4.18c0 .83-1.24 1.6-3.25 2c-2.01.42-4.49.42-6.5 0c-2.01-.4-3.25-1.17-3.25-2m0-8.3v8.3m13-8.3v8.3"/></svg>
  - title: Powerful API
    details: Robust API to automate deployments, manage resources etc..
    icon: <svg width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M5.5 12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4.5-9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-6.5 7l3-5.5m3 0l3 5.5"/></svg>
---


