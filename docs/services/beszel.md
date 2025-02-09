---
title: "Beszel"
description: "Here you can find the documentation for hosting Beszel with Coolify."
---

<ZoomableImage src="/docs/images/services/beszel.svg" />

## What is Beszel?
Lightweight server monitoring hub with historical data, docker stats, and alerts.


## Setup

- Deploy Beszel using Coolify template
- In the UI, `Add a new System`
- Enter `beszel-agent` in Host/IP
- Copy the key from the modal in the `KEY` environnement variable in Beszel's docker-compose env section (Edit Docker Compose button of Beszel service in Coolify UI)

<ZoomableImage src="/docs/images/services/beszel_doc_1.webp" />
<ZoomableImage src="/docs/images/services/beszel_doc_2.webp" />

## Links

- [GitHub ›](https://github.com/henrygd/beszel)
