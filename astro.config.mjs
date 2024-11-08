import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  base: "/docs",
  site: "https://coolify.io/docs",
  redirects: {
    "/knowledge-base/applications": "/docs/applications",
    "/knowledge-base/applications/laravel": "/docs/applications/laravel",
    "/knowledge-base/applications/phoenix": "/docs/applications/phoenix",
    "/knowledge-base/applications/jekyll": "/docs/applications/jekyll",
    "/knowledge-base/applications/nextjs": "/docs/applications/nextjs",
    "/knowledge-base/applications/nuxt": "/docs/applications/nuxt",
    "/knowledge-base/applications/rails": "/docs/applications/rails",
    "/knowledge-base/applications/svelte-kit": "/docs/applications/svelte-kit",
    "/knowledge-base/applications/symfony": "/docs/applications/symfony",
    "/knowledge-base/applications/vite": "/docs/applications/vite",
    "/knowledge-base/applications/vuejs": "/docs/applications/vuejs",
    "/knowledge-base/databases": "/docs/databases",
    "/knowledge-base/databases/backups": "/docs/databases/backups",
    "/knowledge-base/databases/mysql": "/docs/databases/mysql",
    "/knowledge-base/databases/mariadb": "/docs/databases/mariadb",
    "/knowledge-base/databases/postgresql": "/docs/databases/postgresql",
    "/knowledge-base/databases/mongodb": "/docs/databases/mongodb",
    "/knowledge-base/databases/redis": "/docs/databases/redis",
    "/knowledge-base/databases/dragonfly": "/docs/databases/dragonfly",
    "/knowledge-base/databases/keydb": "/docs/databases/keydb",
    "/knowledge-base/databases/clickhouse": "/docs/databases/clickhouse",
    "/knowledge-base/services": "/docs/services",
    "/knowledge-base/services/activepieces": "/docs/services/activepieces",
    "/knowledge-base/services/browserless": "/docs/services/browserless",
    "/knowledge-base/services/appsmith": "/docs/services/appsmith",
    "/knowledge-base/services/appwrite": "/docs/services/appwrite",
    "/knowledge-base/services/authentik": "/docs/services/authentik",
    "/knowledge-base/services/babybuddy": "/docs/services/babybuddy",
    "/knowledge-base/services/budge": "/docs/services/budge",
    "/knowledge-base/services/changedetection":
      "/docs/services/changedetection",
    "/knowledge-base/services/classicpress": "/docs/services/classicpress",
    "/knowledge-base/services/code-server": "/docs/services/code-server",
    "/knowledge-base/services/dashboard": "/docs/services/dashboard",
    "/knowledge-base/services/directus": "/docs/services/directus",
    "/knowledge-base/services/dokuwiki": "/docs/services/dokuwiki",
    "/knowledge-base/services/duplicati": "/docs/services/duplicati",
    "/knowledge-base/services/emby-stat": "/docs/services/emby-stat",
    "/knowledge-base/services/emby": "/docs/services/emby",
    "/knowledge-base/services/fider": "/docs/services/fider",
    "/knowledge-base/services/filebrowser": "/docs/services/filebrowser",
    "/knowledge-base/services/firefly-iii": "/docs/services/firefly-iii",
    "/knowledge-base/services/formbricks": "/docs/services/formbricks",
    "/knowledge-base/services/ghost": "/docs/services/ghost",
    "/knowledge-base/services/gitea": "/docs/services/gitea",
    "/knowledge-base/services/glitchtip": "/docs/services/glitchtip",
    "/knowledge-base/services/grafana": "/docs/services/grafana",
    "/knowledge-base/services/grocy": "/docs/services/grocy",
    "/knowledge-base/services/heimdall": "/docs/services/heimdall",
    "/knowledge-base/services/jellyfin": "/docs/services/jellyfin",
    "/knowledge-base/services/kuzzle": "/docs/services/kuzzle",
    "/knowledge-base/services/logto": "/docs/services/logto",
    "/knowledge-base/services/meilisearch": "/docs/services/meilisearch",
    "/knowledge-base/services/metabase": "/docs/services/metabase",
    "/knowledge-base/services/metube": "/docs/services/metube",
    "/knowledge-base/services/minio": "/docs/services/minio",
    "/knowledge-base/services/plausible": "/docs/services/plausible",
    "/knowledge-base/services/statusnook": "/docs/services/statusnook",
    "/knowledge-base/contribute/coolify": "/docs/contribute/coolify",
    "/knowledge-base/contribute/service": "/docs/contribute/service",
    "/knowledge-base/contribute/documentation":
      "/docs/contribute/documentation",
  },
  integrations: [
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
    starlight({
      head: [
        {
          tag: "meta",
          attrs: {
            name: "description",
            content:
              "An open-source & self-hostable Heroku / Netlify / Vercel alternative.",
          },
        },
        //og:type
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content:
              "https://coolcdn.b-cdn.net/assets/coolify/og-image-docs.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:url",
            content: "https://coolify.io/docs",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "Coolify",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content:
              "https://coolcdn.b-cdn.net/assets/coolify/og-image-docs.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:site",
            content: "@coolifyio",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:title",
            content: "Coolify",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:description",
            content:
              "An open-source & self-hostable Heroku / Netlify / Vercel alternative.",
          },
        },
        {
          tag: "script",
          attrs: {
            defer: true,
            "data-domain": "coolify.io/docs",
            src: "https://analytics.coollabs.io/js/script.js",
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
      favicon: "/coolify.png",
      plugins: [
        starlightLinksValidator(),
        starlightImageZoom(),
        starlightOpenAPI([
          {
            base: "api",
            label: "API",
            schema: "./openapi.yaml",
          },
        ]),
      ],
      title: "Coolify's Docs",
      logo: {
        src: "./src/assets/coolify-transparent.svg",
      },
      social: {
        github: "https://github.com/coollabsio/documentation-coolify",
        "x.com": "https://x.com/coolifyio",
        discord: "https://discord.gg/coolify",
        twitch: "https://twitch.tv/heyandras",
      },
      sidebar: [
        {
          label: "Get Started",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/" },
            { label: "Screenshots", link: "/screenshots" },
            { label: "Videos", link: "/videos" },
            { label: "Quickstart", link: "/quickstart" },
            { label: "Installation - Self-hosted", link: "/installation" },
            { label: "Uninstall - Self-hosted", link: "/uninstall" },
            { label: "Upgrade - Self-hosted", link: "/upgrade" },
            { label: "Downgrade - Self-hosted", link: "/downgrade" },
            { label: "Contact", link: "/contact" },
          ],
        },
        {
          label: "How to Contribute?",
          collapsed: true,
          items: [
            {
              label: "Coolify",
              link: "/contribute/coolify",
            },
            {
              label: "New Service",
              link: "/contribute/service",
            },
            {
              label: "Documentation",
              link: "/contribute/documentation",
            },
          ],
        },
        {
          label: "Applications",
          collapsed: true,
          items: [
            { label: "Overview", link: "/applications" },
            {
              label: "Django",
              link: "/applications/django",
            },
            {
              label: "Phoenix",
              link: "/applications/phoenix",
            },
            {
              label: "Laravel",
              link: "/applications/laravel",
            },
            {
              label: "Jekyll",
              link: "/applications/jekyll",
            },
            {
              label: "Next.js",
              link: "/applications/nextjs",
            },
            {
              label: "Nuxt",
              link: "/applications/nuxt",
            },
            {
              label: "Ruby on Rails",
              link: "/applications/rails",
            },
            {
              label: "SvelteKit",
              link: "/applications/svelte-kit",
            },
            {
              label: "Symfony",
              link: "/applications/symfony",
            },
            {
              label: "Vite",
              link: "/applications/vite",
            },
            {
              label: "Vue.js",
              link: "/applications/vuejs",
            },
          ],
        },
        {
          label: "Databases",
          collapsed: true,
          items: [
            { label: "Overview", link: "/databases" },
            {
              label: "Backups",
              link: "/databases/backups",
            },
            { label: "MySQL", link: "/databases/mysql" },
            {
              label: "MariaDB",
              link: "/databases/mariadb",
            },
            {
              label: "PostgreSQL",
              link: "/databases/postgresql",
            },
            {
              label: "MongoDB",
              link: "/databases/mongodb",
            },
            { label: "Redis", link: "/databases/redis" },
            {
              label: "DragonFly",
              link: "/databases/dragonfly",
            },
            { label: "KeyDB", link: "/databases/keydb" },
            {
              label: "Clickhouse",
              link: "/databases/clickhouse",
            },
          ],
        },

        {
          label: "Services",
          collapsed: true,
          items: [
            { label: "Overview", link: "/services" },
            { label: "Activepieces", link: "/services/activepieces" },
            { label: "AnythingLLM", link: "/services/anythingllm" },
            { label: "Appsmith", link: "/services/appsmith" },
            { label: "Appwrite", link: "/services/appwrite" },
            { label: "Argilla", link: "/services/argilla" },
            { label: "Authentik", link: "/services/authentik" },
            { label: "Baby Buddy", link: "/services/babybuddy" },
            { label: "Browserless", link: "/services/browserless" },
            { label: "Budge", link: "/services/budge" },
            { label: "Changedetection", link: "/services/changedetection" },
            { label: "Chaskiq", link: "/services/chaskiq" },
            { label: "Chatwoot", link: "/services/chatwoot" },
            { label: "Classicpress", link: "/services/classicpress" },
            { label: "Cloudflared", link: "/services/cloudflared" },
            { label: "Code Server", link: "/services/code-server" },
            { label: "Dashboard", link: "/services/dashboard" },
            { label: "Directus", link: "/services/directus" },
            { label: "Docker Registry", link: "/services/docker-registry" },
            { label: "Docmost", link: "/services/docmost" },
            { label: "Docuseal", link: "/services/docuseal" },
            { label: "Dokuwiki", link: "/services/dokuwiki" },
            { label: "Duplicati", link: "/services/duplicati" },
            { label: "Emby", link: "/services/emby" },
            { label: "Emby Stat", link: "/services/emby-stat" },
            { label: "Fider", link: "/services/fider" },
            { label: "Filebrowser", link: "/services/filebrowser" },
            { label: "Firefly III", link: "/services/firefly-iii" },
            { label: "Formbricks", link: "/services/formbricks" },
            { label: "Forgejo", link: "/services/forgejo" },
            { label: "Ghost", link: "/services/ghost" },
            { label: "Gitea", link: "/services/gitea" },
            { label: "Gitlab", link: "/services/gitlab" },
            { label: "Glance", link: "/services/glance" },
            { label: "Glances", link: "/services/glances" },
            { label: "Glitchtip", link: "/services/glitchtip" },
            { label: "Grafana", link: "/services/grafana" },
            { label: "Grocy", link: "/services/grocy" },
            { label: "Heimdall", link: "/services/heimdall" },
            { label: "Homepage", link: "/services/homepage" },
            { label: "Infisical", link: "/services/infisical" },
            { label: "Invoice Ninja", link: "/services/invoice-ninja" },
            { label: "Jellyfin", link: "/services/jellyfin" },
            { label: "Kuzzle", link: "/services/kuzzle" },
            { label: "Label Studio", link: "/services/labelstudio" },
            { label: "Langfuse", link: "/services/langfuse" },
            { label: "Listmonk", link: "/services/listmonk" },
            { label: "Litellm", link: "/services/litellm" },
            { label: "Logto", link: "/services/logto" },
            { label: "Mailpit", link: "/services/mailpit" },
            { label: "Mediawiki", link: "/services/mediawiki" },
            { label: "Meilisearch", link: "/services/meilisearch" },
            { label: "Metabase", link: "/services/metabase" },
            { label: "Metube", link: "/services/metube" },
            { label: "Minecraft", link: "/services/minecraft" },
            { label: "Minio", link: "/services/minio" },
            { label: "Mixpost", link: "/services/mixpost" },
            { label: "Moodle", link: "/services/moodle" },
            { label: "Mosquitto", link: "/services/mosquitto" },
            { label: "N8N", link: "/services/n8n" },
            { label: "Nextcloud", link: "/services/nextcloud" },
            { label: "Nitropage", link: "/services/nitropage" },
            { label: "NocoDB", link: "/services/nocodb" },
            { label: "Odoo", link: "/services/odoo" },
            { label: "Ollama", link: "/services/ollama" },
            { label: "Openblocks", link: "/services/openblocks" },
            { label: "Outline", link: "/services/outline" },
            { label: "Pairdrop", link: "/services/pairdrop" },
            { label: "Penpot", link: "/services/penpot" },
            { label: "PhpMyAdmin", link: "/services/phpmyadmin" },
            { label: "Plane", link: "/services/plane" },
            { label: "Plausible", link: "/services/plausible" },
            { label: "Plunk", link: "/services/plunk" },
            { label: "Pocketbase", link: "/services/pocketbase" },
            { label: "PostHog", link: "/services/posthog" },
            { label: "Prefect", link: "/services/prefect" },
            { label: "Qdrant", link: "/services/qdrant" },
            { label: "RabbitMQ", link: "/services/rabbitmq" },
            { label: "Reactive Resume", link: "/services/reactive-resume" },
            { label: "Rocket.Chat", link: "/services/rocketchat" },
            { label: "SearXNG", link: "/services/searxng" },
            { label: "Shlink", link: "/services/shlink" },
            { label: "Slash", link: "/services/slash" },
            { label: "Snapdrop", link: "/services/snapdrop" },
            { label: "Statusnook", link: "/services/statusnook" },
            { label: "Stirling PDF", link: "/services/stirling-pdf" },
            { label: "Supabase", link: "/services/supabase" },
            { label: "Syncthing", link: "/services/syncthing" },
            { label: "Tolgee", link: "/services/tolgee" },
            { label: "Trigger", link: "/services/trigger" },
            { label: "Twenty", link: "/services/twenty" },
            { label: "Umami", link: "/services/umami" },
            { label: "Unleash", link: "/services/unleash" },
            { label: "Unstructured", link: "/services/unstructured" },
            { label: "Uptime Kuma", link: "/services/uptime-kuma" },
            { label: "Vaultwarden", link: "/services/vaultwarden" },
            { label: "Vikunja", link: "/services/vikunja" },
            { label: "Weaviate", link: "/services/weaviate" },
            { label: "Weblate", link: "/services/weblate" },
            { label: "Whoogle", link: "/services/whoogle" },
            { label: "Windmill", link: "/services/windmill" },
            { label: "Wordpress", link: "/services/wordpress" }
          ],
        },
        {
          label: "Knowledge Base",
          collapsed: true,
          items: [
            { label: "FAQ", link: "/knowledge-base/faq" },

            {
              label: "Internal",
              collapsed: true,
              items: [
                {
                  label: "Scalability",
                  link: "/knowledge-base/internal/scalability",
                },
                { label: "Terminal", link: "/knowledge-base/internal/terminal" },

              ],
            },
            {
              label: "Self-hosted Instance",
              collapsed: true,
              items: [
                { label: "Monitoring", link: "/knowledge-base/monitoring" },
                {
                  label: "Notifications",
                  link: "/knowledge-base/notifications",
                },
                { label: "Coolify Updates", link: "/knowledge-base/coolify-updates" },
                { label: "Commands", link: "/knowledge-base/commands" },
                { label: "Delete User", link: "/knowledge-base/delete-user" },
                { label: "OAuth", link: "/knowledge-base/oauth" },
              ],
            },
            {
              label: "DNS & Domains",
              collapsed: true,
              items: [
                {
                  label: "DNS Configuration",
                  link: "/knowledge-base/dns-configuration",
                },
                { label: "Domains", link: "/knowledge-base/domains" },
              ],
            },
            {
              label: "Resources",
              collapsed: true,
              items: [
                {
                  label: "Environment Variables",
                  link: "/knowledge-base/environment-variables",
                },
                {
                  label: "Persistent Storage",
                  link: "/knowledge-base/persistent-storage",
                },
                { label: "Drain Logs", link: "/knowledge-base/drain-logs" },
                {
                  label: "Health checks",
                  link: "/knowledge-base/health-checks",
                },
                {
                  label: "Cron Syntax",
                  link: "/knowledge-base/cron-syntax",
                },
              ],
            },
            {
              label: "How-Tos",
              collapsed: true,
              items: [
                {
                  label: "Load-balancing on Hetzner",
                  link: "/knowledge-base/how-to/hetzner-loadbalancing",
                },
                {
                  label: "Wordpress Multisite",
                  link: "/knowledge-base/how-to/wordpress-multisite",
                },
                {
                  label: "Raspberry Pi OS Setup",
                  link: "/knowledge-base/how-to/raspberry-pi-os",
                },
              ],
            },
            {
              label: "Git",
              collapsed: true,
              items: [
                {
                  label: "GitHub",
                  items: [
                    {
                      label: "Integration",
                      link: "/knowledge-base/git/github/integration",
                    },
                    {
                      label: "GitHub Actions",
                      link: "/knowledge-base/git/github/github-actions",
                    },
                  ],
                },
                {
                  label: "GitLab",
                  items: [
                    {
                      label: "Integration",
                      link: "/knowledge-base/git/gitlab/integration",
                    },
                  ],
                },
                {
                  label: "Bitbucket",
                  items: [
                    {
                      label: "Integration",
                      link: "/knowledge-base/git/bitbucket/integration",
                    },
                  ],
                },
                {
                  label: "Gitea",
                  items: [
                    {
                      label: "Integration",
                      link: "/knowledge-base/git/gitea/integration",
                    },
                  ],
                },
              ],
            },
            {
              label: "Server",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "/knowledge-base/server/introduction",
                },
                {
                  label: "Automated Cleanup",
                  link: "/knowledge-base/server/automated-cleanup",
                },
                {
                  label: "Build Server",
                  link: "/knowledge-base/server/build-server",
                },
                { label: "Firewall", link: "/knowledge-base/server/firewall" },
                {
                  label: "Multiple Servers",
                  link: "/knowledge-base/server/multiple-servers",
                },
                {
                  label: "Non-root User",
                  link: "/knowledge-base/server/non-root-user",
                },
                { label: "OpenSSH", link: "/knowledge-base/server/openssh" },
                {
                  label: "Oracle Cloud",
                  link: "/knowledge-base/server/oracle-cloud",
                },
                { label: "Proxies", link: "/knowledge-base/server/proxies" },
              ],
            },
            {
              label: "S3",
              collapsed: true,
              items: [
                { label: "Introduction", link: "/knowledge-base/s3" },
                { label: "AWS", link: "/knowledge-base/s3/aws" },
                { label: "R2", link: "/knowledge-base/s3/r2" },
              ],
            },
            {
              label: "Docker",
              collapsed: true,
              items: [
                { label: "Compose", link: "/knowledge-base/docker/compose" },
                {
                  label: "Custom Commands",
                  link: "/knowledge-base/docker/custom-commands",
                },
                { label: "Registry", link: "/knowledge-base/docker/registry" },
                { label: "Swarm", link: "/knowledge-base/docker/swarm" },
              ],
            },
            {
              label: "Cloudflare",
              collapsed: true,
              items: [
                {
                  label: "Tunnels",
                  link: "/knowledge-base/cloudflare/tunnels",
                },
              ],
            },
            {
              label: "Traefik",
              collapsed: true,
              items: [
                {
                  label: "Basic Auth Middleware",
                  link: "/knowledge-base/traefik/basic-auth",
                },
                {
                  label: "Custom SSL Certificates",
                  link: "/knowledge-base/traefik/custom-ssl-certs",
                },
                {
                  label: "Dashboard",
                  link: "/knowledge-base/traefik/dashboard",
                },
                {
                  label: "Dynamic Configurations",
                  link: "/knowledge-base/traefik/dynamic-configurations",
                },
                {
                  label: "Healthcheck",
                  link: "/knowledge-base/traefik/healthcheck",
                },
                {
                  label: "Load Balancing",
                  link: "/knowledge-base/traefik/load-balancing",
                },
                {
                  label: "Redirects",
                  link: "/knowledge-base/traefik/redirects",
                },
                {
                  label: "Wildcard Certificates",
                  link: "/knowledge-base/traefik/wildcard-certificates",
                },
              ],
            },

          ],
        },
        {
          label: "API Reference",
          collapsed: true,
          items: [
            { label: "Authorization", link: "/api-reference/authorization" },
            ...openAPISidebarGroups,
          ],
        },
      ],
    }),
    sitemap(),
  ],
});
