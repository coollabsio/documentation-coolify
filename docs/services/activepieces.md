---
title: ActivePieces
tabs:
  - title: Overview & Requirements
    content:
      items:
        - icon: 🔲
          label: CPU
          value: 2 Cores
        - icon: 💾
          label: RAM
          value: 2 GB
        - icon: 💿
          label: Storage
          value: 10 GB
        - icon: 🌐
          label: Network
          value: IPv4 Address Required
        - icon: 🖥️
          label: Supported OS
          value: All Linux-based distributions
        - icon: 🌱
          label: System Architecture
          value: ARM64, AMD64 (x86_64)
      message:
        icon: 🌱
        value: It may take up to 5 minutes for the services to go healthy after deployment. Please be patient and avoid assuming the services are not working during this period.
        type: info

  - title: Default Credentials
    content:
      items:
        - icon: 👤
          label: Username
          value: admin
        - icon: 🔑
          label: Password
          value: admin

  - title: ActivePieces Environment
    content:
      subtitle: Core Configuration
      items:
        - code: SERVICE_FQDN_ACTIVEPIECES
          description: The fully qualified domain name for your ActivePieces instance
        - code: AP_API_KEY
          description: API key for authentication ($SERVICE_PASSWORD_64_APIKEY)

  - title: PostgreSQL Environment
    content:
      items:
        - code: POSTGRES_DB
          description: Database name (Default activepieces)
        - code: POSTGRES_PASSWORD
          description: Database password ($SERVICE_PASSWORD_POSTGRES)
        - code: POSTGRES_USER
          description: Database user ($SERVICE_USER_POSTGRES)
        - code: POSTGRES_PORT
          description: Database port (Default 5432)

  - title: External Links
    content:
      items:
        - code: Official Website
          description: https://www.activepieces.com?utm_source=coolify.io
        - code: Official Documentation
          description: https://www.activepieces.com/docs?utm_source=coolify.io
        - code: GitHub Repository
          description: https://github.com/activepieces/activepieces?utm_source=coolify.io
---

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

# Activepieces

![ActivePieces](/images/services/activepieces0.png)

## What is ActivePieces

Your friendliest open source all-in-one automation tool, designed to be extensible through a type-safe pieces framework written in Typescript.

## Visual Demos

![build](/images/services/activepieces1.gif)

![templates](/images/services/activepieces2.gif)

## Installation & Configuration

This section provides detailed information about installing and configuring ActivePieces in your environment. You'll find system requirements, credentials, environment variables, and useful external resources organized in tabs below.

<TabBlock :tabs="frontmatter.tabs" />
