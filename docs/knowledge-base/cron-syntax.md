---
title: "Supported Cron Syntax"
description: "An overview of the supported cron syntax for Coolify."
---

# Supported Cron Syntax
Coolify supports scheduling automated tasks like cleanups, backups, and more using cron syntax.

## Supported Syntax

### Standard Cron Format
Coolify supports the complete standard cron syntax format (`* * * * *`).

### Predefined Schedules
For convenience, Coolify also supports the following predefined schedule strings:

#### Without @ Prefix
- `every_minute` - Runs every minute
- `hourly` - Runs once per hour
- `daily` - Runs once per day
- `weekly` - Runs once per week
- `monthly` - Runs once per month
- `yearly` - Runs once per year

#### With @ Prefix
- `@every_minute` - Runs every minute
- `@hourly` - Runs once per hour
- `@daily` - Runs once per day
- `@weekly` - Runs once per week
- `@monthly` - Runs once per month
- `@yearly` - Runs once per year