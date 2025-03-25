---
title: "Manually Setup GitHub App"
---

# GitHub App
This guide will show you how to manually setup an existing Github App or how to change a currently configured one.

Since `4.0.0-beta.399` you are able to change all the Github App details inside Coolify.


## On Github
1. You will need the `App ID`, `Client ID`, a `Client Secret (generated)`, `Github App Name`, `Webhook Secret`. You can find these on your Github App configuration page.
2. Generate a Private Key on your Github App configuration page (if you already have one, ignore this).


3. Set the `Homepage URL` to `https://app.coolify.io`.
4. Set the `Setup URL` to the following: `https://app.coolify.io/webhooks/source/github/install?source=<source_uuid>` where `source_uuid` will be the newly created source in Coolify.
5. Activate `Webhook` and set the `Webhook URL` to `https://app.coolify.io/webhooks/source/github/events`
6. Set the `Webhook Secret`.
7. In the `Install App` section, Install the app to the organization you want to use.
8. Copy the `Installation ID` from the URL of the page after you installed the Github App.
9. In the `Permissions & Events` section, set the following permissions:
   Repository permissions:
    - Contents: read
    - Metadata: read
    - Email: read
    - Pull Request: read & write (optional, if you want to use the pull request feature)


## On Coolify
0. Add the `Private Key` generated in the previous step as a new `Private Key` in the `Keys & Tokens` section.
1. Go to the `Sources` page and click on the `+` button or edit the existing one.
2. Fill the name and the organization name (optional). Press `Continue`.
3. Click on the `Continue` button on the `Manual Installation` section.
4. Enter the `Github App Name`, `App ID`, `Installation ID`, `Client ID`, `Client Secret` , `Webhook Secret`, select the `Private Key` you added in step 0 and `Save`.
5. If you filled everything correctly, click on the `Sync Name` button. If no errors, then you are done.