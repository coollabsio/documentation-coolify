---
title: "Common Issues for Servers"
description: "Here are some common issues and their solutions related to server issues."
---

# Common Issues

Here are some common issues and their solutions related to server issues.

## 2FA Stopped Working
It is usually a time synchronization issue.

### Diagnosis
- Check your server's time with `date` - if the time is off, you need to synchronize it.
- Check your NTP configuration with `cat /etc/ntp.conf`.
- Check with `systemctl status systemd-timesyncd.service` if your operating system is using systemd to synchronize time.
- Check your firewall (`ufw`, `iptables`) rules to see if you have any rules that block time synchronization ports (`123/udp, 123/tcp`).

### Solution
- If your operating system is using systemd, you can synchronize the time with `sudo timedatectl set-ntp true`.
- If your operating system is not using systemd, you can synchronize the time with `sudo ntpdate ntp.ubuntu.com`.


## Raspberry Pi Crashes
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

## Connection Unstable
If you're experiencing unstable connections, most of the times (90% of the cases) a firewall issue, ufw, iptables or some configuration on your server or between your Coolify instance (or Coolify Cloud) and your server.

### Symptoms
- Server is sometimes reachable, sometimes not.
- You receive a lot of failed connection lost emails.

### Diagnosis
- Check your UFW rules with `ufw status numbered` and see if you have a `LIMIT` rule for port 22.
- Check your iptables rules with `iptables -L -v -n` and see if you have a `LIMIT` rule for port 22.
- Check your server logs (`/var/log/ufw.log`, `/var/log/iptables.log`, `/var/log/auth.log`, `/var/log/kern.log`) for any firewall related errors.

### Solution
- UFW
   - `ufw status numbered` - if you have port 22 open, but with a `LIMIT` rule, this is the problem.
   - `ufw delete <rule_number>` - delete the rule - you probably have IPV4 and IPV6 rules, so you need to delete both.
     - After you deleted the rule, you need to check the status with `ufw status numbered` and see that the rule is deleted and which rule number is next.
   - `ufw allow 22/tcp` - add the rule without a limit.

   OR
   
   - `ufw limit 22/tcp 100/minute` - add a higher limit.

In case of Coolify Cloud, you can enable connection from Coolify Cloud IP addresses by adding the following to the UFW rules:
```sh
 ufw insert 1 allow from <ipv4>/22 to any port 22
 ufw insert 2 allow from <ipv6>/22 to any port 22
```
> You can find the IP addresses in the Coolify Cloud here: https://coolify.io/ipv4.txt and https://coolify.io/ipv6.txt


## Failed To Get Access Token

The error is usually related to NTP time synchronization issue.

Example error: `'Issued at' claim (iat) must be an Integer representing the time that assertation issued.`

You must do the same as the [2FA Stopped Working](#_2fa-stopped-working) solution.


