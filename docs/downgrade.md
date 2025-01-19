---
title: Downgrading Coolify
---

# Downgrading Coolify
If you're using [Coolify Cloud](https://coolify.io/pricing/), please note that you **cannot** downgrade the version of Coolify, as the cloud instances are managed by the [core team](/resource/team). If you are facing any issues, please contact [support](/support). 

The following instructions are for those who are self-hosting Coolify and wish to downgrade their instance.

If you're experiencing issues with the latest version of Coolify, you can easily downgrade to the previous version. Follow the steps below to perform a downgrade on your self-hosted instance.

::: danger CAUTION!!
  **Downgrading can introduce issues, so it is recommended to test the downgrade process in a staging environment before applying it to your production server.**
:::

## 1. Disable Auto Update

Before downgrading, it's important to disable the Auto Update feature to prevent Coolify from automatically upgrading again after you perform the downgrade.

1. Log in as the root user (or any user who has access to the root or initial team).

2. Navigate to the Settings menu in your Coolify dashboard.

3. In the Settings menu, disable the **Auto Update** feature.

<ZoomableImage src="/docs/public/images/get-started/upgrade-disable-auto-update.webp" />

::: warning Important!
  Disabling auto-update is essential, as it ensures that Coolify doesn’t override your downgrade with a newer version.
:::


## 2.Login to Your Server via SSH
Next, you need to SSH into your server to execute the downgrade command.


## 3. Execute the Downgrade Command
To downgrade Coolify to the desired version, run the following command in your terminal:
```sh
  curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash -s 4.0.0-beta.369
```
Replace `4.0.0-beta.369` with the version number you want to downgrade to. 

For example, you can downgrade to `4.0.0-beta.333` or any previous version.

::: tip 📌 Info
  Double-check the version number you are specifying to ensure you are downgrading to the correct version. You can check the Coolify [release notes](https://github.com/coollabsio/coolify/releases) for version details.
:::


## Potential Issues with Downgrading
While downgrading is possible, be aware of the following risks:
- [Database Schema Compatibility](#database-schema-compatibility)
- [Feature Incompatibility](#feature-incompatibility)

---

#### Database Schema Compatibility: 
Downgrading can cause issues since the database schema may not be backward compatible. Some features may not work as expected due to changes in the database structure between versions.

#### Feature Incompatibility: 
Some features might not function properly after downgrading, as certain features in the newer version may rely on changes that are not present in the older version.