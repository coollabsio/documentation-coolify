---
title: ActivePieces
---

# Activepieces

![ActivePieces](/images/services/activepieces0.png)

## What is ActivePieces

Your friendliest open source all-in-one automation tool, designed to be extensible through a type-safe pieces framework written in Typescript.

## Screenshots

![build](/images/services/activepieces1.gif)
![templates](/images/services/activepieces2.gif)


## Setup

### Minimum Server Requirements

::: info System Requirements
- 🔲 **CPU:** 2 Cores
- 💾 **RAM:** 2 GB
- 💿 **Storage:** 10 GB
- 🌐 **Network:** IPv4 Address Required
:::

### Default Credentials

::: info Default Credentials
- 👤 **Username:** admin
- 🔑 **Password:** admin
:::

::: warning Note
It takes around 5mins for the services to go healthy so don't deploy it and think the services is not working, wait for some time.
:::

## Environment variables
### ActivePieces
::: info Environment Variables
#### Core Configuration
- `SERVICE_FQDN_ACTIVEPIECES`: The fully qualified domain name for your ActivePieces instance
- `AP_API_KEY`: API key for authentication ($SERVICE_PASSWORD_64_APIKEY)
- `AP_ENCRYPTION_KEY`: Key used for encrypting sensitive data ($SERVICE_PASSWORD_ENCRYPTIONKEY)
- `AP_JWT_SECRET`: Secret key for JWT token generation ($SERVICE_PASSWORD_64_JWT)

#### Execution Settings
- `AP_ENGINE_EXECUTABLE_PATH`: Path to the engine executable (Default: dist/packages/engine/main.js)
- `AP_ENVIRONMENT`: Environment mode (Default: prod)
- `AP_EXECUTION_MODE`: Flow execution mode (Default: UNSANDBOXED)
- `AP_SANDBOX_RUN_TIME_SECONDS`: Maximum runtime for sandboxed executions (Default: 600)

#### Database Configuration
- `AP_POSTGRES_HOST`: PostgreSQL host (Default: postgres)
- `AP_POSTGRES_PORT`: PostgreSQL port (Default: 5432)
- `AP_POSTGRES_DATABASE`: Database name (Default: activepieces)
- `AP_POSTGRES_USERNAME`: Database user ($SERVICE_USER_POSTGRES)
- `AP_POSTGRES_PASSWORD`: Database password ($SERVICE_PASSWORD_POSTGRES)

#### Redis Configuration
- `AP_REDIS_HOST`: Redis host (Default: redis)
- `AP_REDIS_PORT`: Redis port (Default: 6379)

#### Application Settings
- `AP_FRONTEND_URL`: URL for the frontend interface (Same as SERVICE_FQDN_ACTIVEPIECES)
- `AP_TELEMETRY_ENABLED`: Enable/disable telemetry data (Default: false)
- `AP_TEMPLATES_SOURCE_URL`: Source URL for flow templates (Default: https://cloud.activepieces.com/api/v1/flow-templates)
- `AP_TRIGGER_DEFAULT_POLL_INTERVAL`: Default polling interval in minutes (Default: 5)
- `AP_WEBHOOK_TIMEOUT_SECONDS`: Webhook timeout duration (Default: 30)
:::
### Postgres
::: info Environment Variables
- `POSTGRES_DB`: Database name (Default: activepieces)
- `POSTGRES_PASSWORD`: Database password ($SERVICE_PASSWORD_POSTGRES)
- `POSTGRES_USER`: Database user ($SERVICE_USER_POSTGRES)
- `POSTGRES_PORT`: Database port (Default: 5432)
:::

## Links

- [The official website ›](https://www.activepieces.com?utm_source=coolify.io)
- [GitHub ›](https://github.com/activepieces/activepieces?utm_source=coolify.io)