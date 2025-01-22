---
title: "Introduction"
---



#### 2. Raspberry Pi Crashes
If you're using a Raspberry Pi with only 2GB of RAM, you may experience system crashes even with swap space enabled. 

This is likely due to the slower SD cards often used in Raspberry Pis, which can be unstable.

To resolve this, you can:
- Upgrade to a Raspberry Pi with 4GB+ of RAM for better stability.
- Or, limit Docker’s memory usage by adding the following configuration to your `/etc/docker/daemon.json` file:
  ```json
    {
    "memory": "1.8g"
    }
  ```
