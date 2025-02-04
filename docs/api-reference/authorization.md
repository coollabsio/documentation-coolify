---
title: Authorization
description: "Learn how to authorize your API requests."
---

# Authorization
API request requires a `Bearer` token in `Authorization` header, which could be generated from the UI.

## Access

The API can be accesed through `http://<ip>:8000/api`.

With the exception of `/health` and `/feedback`, all routes are additionally prefixed with `/v1` resulting in the base rouce `http://<ip>:8000/api/v1`.

## Generate

1. Go to `Keys & Tokens` / `API tokens`.
2. Define a name for your token and click `Create New Token`.

::: success Tip
  You will see the token once, so make sure to copy it and store it in a safe place.
:::

## Scope

The token will only be able to access resources that are owned by the team that the token is scoped to.

```php
# Sample token
3|WaobqX9tJQshKPuQFHsyApxuOOggg4wOfvGc9xa233c376d7
```

## Permissions

Currently there are three types of permissions:

- read-only `(default)`
- view:sensitive
- `*` (all permissions)

### `read-only`

With this permission, you can only read data from the API, but you can't create, update, or delete any resources. Also you can't see sensitive data.

### `view:sensitive`

Without this permission, passwords, api keys, and other sensitive data will be redacted from the API response.

### `*`

Full access to all resources and sensitive data.