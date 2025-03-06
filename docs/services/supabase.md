---
title: "Supabase"
description: "Here you can find the documentation for hosting Supabase with Coolify."
---

![Supabase](https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only)

## What is Supabase?

The open source Firebase alternative.

## Screenshots

<ZoomableImage src="/docs/images/services/supabase-selfhost.webp" />

## Notes

You can find your anonymous key in the **Environment Variables** area under **SERVICE_SUPABASEANON_KEY**.

## Public Port Access

> NOTE: This is a bug and should be fixed soon.

Set **Supabase Db** to public

![CleanShot 2025-03-06 at 07 16 50@2x](https://github.com/user-attachments/assets/70f2dc52-2590-481d-a226-ba7ee3a4ba12)

Then

Go to the **General** tab then **Edit Compose File**

Then add this line 
`ports:
      - ${POSTGRES_PORT:-5432}:${POSTGRES_PORT:-5432}`

To 
```yaml
  supabase-db:
    image: 'supabase/postgres:15.6.1.146'
    healthcheck:
      test: 'pg_isready -U postgres -h 127.0.0.1'
      interval: 5s
      timeout: 5s
      retries: 10
    depends_on:
      supabase-vector:
        condition: service_healthy
    ports:
      - ${POSTGRES_PORT:-5432}:${POSTGRES_PORT:-5432}
```

And Restart

## Links

- [Official Website ›](https://supabase.io)
- [GitHub ›](https://github.com/supabase/supabase)
