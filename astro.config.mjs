import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
import starlightImageZoom from 'starlight-image-zoom'
import starlightLinksValidator from 'starlight-links-validator'
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    base: '/docs',
    site: 'https://coolify.io/docs',
    integrations: [tailwind({
        // Disable the default base styles:
        applyBaseStyles: false,
    }), starlight({
        customCss: [
            './src/tailwind.css',
        ],
        favicon: '/coolify.png',
        plugins: [
            starlightLinksValidator(),
            starlightImageZoom(),
            starlightOpenAPI([
                {
                    base: 'api',
                    label: 'API',
                    schema: './openapi.yaml',
                },
            ]),
        ],
        title: 'Coolify\'s Documentation',
        social: {
            github: 'https://github.com/coollabsio/documentation-coolify',
            'x.com': 'https://x.com/coolifyio',
            discord: 'https://discord.gg/coolify',
            twitch: 'https://twitch.tv/heyandras',
        },
        sidebar: [
            {
                label: 'Get Started',
                items: [
                    { label: 'Introduction', link: '/' },
                    { label: 'Screenshots', link: '/screenshots' },
                    { label: 'Videos', link: '/videos' },
                    { label: 'Quickstart', link: '/quickstart' },
                    { label: 'Installation - Self-hosted', link: '/installation' },
                    { label: 'Uninstall - Self-hosted', link: '/uninstall' },
                    { label: 'Upgrade - Self-hosted', link: '/upgrade' },
                    { label: 'Downgrade - Self-hosted', link: '/downgrade' },
                    { label: 'Contact', link: '/contact' },
                ]
            },
            {
                label: 'Knowledge Base',
                collapsed: false,
                items: [
                    { label: 'FAQ', link: '/knowledge-base/faq' },
                    {
                        label: 'Self-hosted Instance', collapsed: true, items: [
                            { label: 'Monitoring', link: '/knowledge-base/monitoring' },
                            { label: 'Notifications', link: '/knowledge-base/notifications' },
                            { label: 'Self-update', link: '/knowledge-base/self-update' },
                            { label: 'Commands', link: '/knowledge-base/commands' },
                            { label: "Delete User", link: '/knowledge-base/delete-user' },
                        ]
                    },
                    {
                        label: 'DNS & Domains', collapsed: true, items: [
                            { label: 'DNS Configuration', link: '/knowledge-base/dns-configuration' },
                            { label: 'Domains', link: '/knowledge-base/domains' },
                        ]
                    },
                    {
                        label: 'Resources', collapsed: true, items: [
                            { label: 'Environment Variables', link: '/knowledge-base/environment-variables' },
                            { label: 'Persistent Storage', link: '/knowledge-base/persistent-storage' },
                            { label: 'Drain Logs', link: '/knowledge-base/drain-logs' },
                            { label: 'Health checks', link: '/knowledge-base/health-checks' },
                            { label: 'Database Backups', link: '/knowledge-base/database-backups' },
                            { label: 'How to add a new service', link: '/knowledge-base/add-a-service' },
                            {
                                label: 'Applications', collapsed: true, items: [
                                    { label: 'Overview', link: '/knowledge-base/applications' },
                                    { label: 'Django', link: '/knowledge-base/applications/django' },
                                    { label: 'Laravel', link: '/knowledge-base/applications/laravel' },
                                    { label: 'Jekyll', link: '/knowledge-base/applications/jekyll' },
                                    { label: 'Next.js', link: '/knowledge-base/applications/nextjs' },
                                    { label: 'Nuxt', link: '/knowledge-base/applications/nuxt' },
                                    { label: 'Ruby on Rails', link: '/knowledge-base/applications/rails' },
                                    { label: 'SvelteKit', link: '/knowledge-base/applications/svelte-kit' },
                                    { label: 'Symfony', link: '/knowledge-base/applications/symfony' },
                                    { label: 'Vite', link: '/knowledge-base/applications/vite' },
                                    { label: 'Vue.js', link: '/knowledge-base/applications/vuejs' },
                                ]
                            },
                            {
                                label: "Databases", collapsed: true, items: [
                                    { label: "Overview", link: '/knowledge-base/databases' },
                                    { label: 'Backups', link: '/knowledge-base/databases/backups' },
                                    { label: "MySQL", link: '/knowledge-base/databases/mysql' },
                                    { label: "MariaDB", link: '/knowledge-base/databases/mariadb' },
                                    { label: "PostgreSQL", link: '/knowledge-base/databases/postgresql' },
                                    { label: "MongoDB", link: '/knowledge-base/databases/mongodb' },
                                    { label: "Redis", link: '/knowledge-base/databases/redis' },
                                    { label: "DragonFly", link: '/knowledge-base/databases/dragonfly' },
                                    { label: "KeyDB", link: '/knowledge-base/databases/keydb' },
                                    { label: "Clickhouse", link: '/knowledge-base/databases/clickhouse' },
                                ]
                            },

                            {
                                label: "Services", collapsed: true, items: [
                                    { label: "Overview", link: '/knowledge-base/services' },
                                    { label: "Activepieces", link: '/knowledge-base/services/activepieces' },
                                    { label: "Appsmith", link: '/knowledge-base/services/appsmith' },
                                    { label: "Appwrite", link: '/knowledge-base/services/appwrite' },
                                    { label: "Authentik", link: '/knowledge-base/services/authentik' },
                                    { label: "Baby Buddy", link: '/knowledge-base/services/babybuddy' },
                                    { label: "Budge", link: '/knowledge-base/services/budge' },
                                    { label: "Changedetection", link: '/knowledge-base/services/changedetection' },
                                    { label: "Classicpress", link: '/knowledge-base/services/classicpress' },
                                    { label: "Code Server", link: '/knowledge-base/services/code-server' },
                                    { label: "Dashboard", link: '/knowledge-base/services/dashboard' },
                                    { label: "Directus", link: '/knowledge-base/services/directus' },
                                    { label: "Dokuwiki", link: '/knowledge-base/services/dokuwiki' },
                                    { label: "Duplicati", link: '/knowledge-base/services/duplicati' },
                                    { label: "Emby Stat", link: '/knowledge-base/services/emby-stat' },
                                    { label: "Emby", link: '/knowledge-base/services/emby' },
                                    { label: "Fider", link: '/knowledge-base/services/fider' },
                                    { label: "Filebrowser", link: '/knowledge-base/services/filebrowser' },
                                    { label: "Firefly III", link: '/knowledge-base/services/firefly-iii' },
                                    { label: "Formbricks", link: '/knowledge-base/services/formbricks' },
                                    { label: "Ghost", link: '/knowledge-base/services/ghost' },
                                    { label: "Gitea", link: '/knowledge-base/services/gitea' },
                                    { label: "Glitchtip", link: '/knowledge-base/services/glitchtip' },
                                    { label: "Grafana", link: '/knowledge-base/services/grafana' },
                                    { label: "Grocy", link: '/knowledge-base/services/grocy' },
                                    { label: "Heimdall", link: '/knowledge-base/services/heimdall' },
                                    { label: "Jellyfin", link: '/knowledge-base/services/jellyfin' },
                                    { label: "Kuzzle", link: '/knowledge-base/services/kuzzle' },
                                    { label: "Logto", link: '/knowledge-base/services/logto' },
                                    { label: "Meilisearch", link: '/knowledge-base/services/meilisearch' },
                                    { label: "Metabase", link: '/knowledge-base/services/metabase' },
                                    { label: "Metube", link: '/knowledge-base/services/metube' },
                                    { label: "Minio", link: '/knowledge-base/services/minio' },
                                    { label: "Plausible", link: '/knowledge-base/services/plausible' },
                                    { label: "Statusnook", link: '/knowledge-base/services/statusnook' },
                                ]
                            }
                        ]
                    },
                    {
                        label: 'How-Tos', collapsed: true, items: [
                            { label: 'Load-balancing on Hetzner', link: '/knowledge-base/how-to/hetzner-loadbalancing' },
                        ]
                    },
                    {
                        label: "Git", collapsed: true, items: [
                            {
                                label: "GitHub", items: [
                                    { label: "Integration", link: '/knowledge-base/git/github/integration' },
                                    { label: "GitHub Actions", link: '/knowledge-base/git/github/github-actions' },
                                ],
                            },
                            {
                                label: "GitLab", items: [
                                    { label: "Integration", link: '/knowledge-base/git/gitlab/integration' },
                                ],
                            },
                            {
                                label: "Bitbucket", items: [
                                    { label: "Integration", link: '/knowledge-base/git/bitbucket/integration' },
                                ],
                            },
                            {
                                label: "Gitea", items: [
                                    { label: "Integration", link: '/knowledge-base/git/gitea/integration' },
                                ]
                            }
                        ]
                    },
                    {
                        label: "Server", collapsed: true, items: [
                            { label: "Introduction", link: '/knowledge-base/server/introduction' },
                            { label: "Automated Cleanup", link: '/knowledge-base/server/automated-cleanup' },
                            { label: "Build Server", link: '/knowledge-base/server/build-server' },
                            { label: "Firewall", link: '/knowledge-base/server/firewall' },
                            { label: "Multiple Servers", link: '/knowledge-base/server/multiple-servers' },
                            { label: "Non-root User", link: '/knowledge-base/server/non-root-user' },
                            { label: "OpenSSH", link: '/knowledge-base/server/openssh' },
                            { label: "Oracle Cloud", link: '/knowledge-base/server/oracle-cloud' },
                            { label: "Proxies", link: '/knowledge-base/server/proxies' }
                        ]
                    },
                    {
                        label: "S3", collapsed: true, items: [
                            { label: "Introduction", link: '/knowledge-base/s3' },
                            { label: "AWS", link: '/knowledge-base/s3/aws' },
                            { label: "R2", link: '/knowledge-base/s3/r2' },
                        ]
                    },
                    {
                        label: "Docker", collapsed: true, items: [
                            { label: "Compose", link: '/knowledge-base/docker/compose' },
                            { label: "Custom Commands", link: '/knowledge-base/docker/custom-commands' },
                            { label: "Registry", link: '/knowledge-base/docker/registry' },
                            { label: "Swarm", link: '/knowledge-base/docker/swarm' },
                        ]
                    },
                    {
                        label: "Cloudflare", collapsed: true, items: [
                            { label: "Tunnels", link: '/knowledge-base/cloudflare/tunnels' },
                        ]
                    }, {
                        label: "Traefik", collapsed: true, items: [
                            { label: "Basic Auth Middleware", link: '/knowledge-base/traefik/basic-auth' },
                            { label: "Custom SSL Certificates", link: '/knowledge-base/traefik/custom-ssl-certs' },
                            { label: "Dashboard", link: '/knowledge-base/traefik/dashboard' },
                            { label: "Dynamic Configurations", link: '/knowledge-base/traefik/dynamic-configurations' },
                            { label: "Healthcheck", link: '/knowledge-base/traefik/healthcheck' },
                            { label: "Load Balancing", link: '/knowledge-base/traefik/load-balancing' },
                            { label: "Redirects", link: '/knowledge-base/traefik/redirects' },
                            { label: "Wildcard Certificates", link: '/knowledge-base/traefik/wildcard-certificates' },
                        ]
                    }
                ]
            },
            {
                label: "API Reference",
                items: [
                    { label: "Authorization", link: '/api-reference/authorization' },
                    ...openAPISidebarGroups,
                ]
            },

        ],
    }), sitemap()],
});