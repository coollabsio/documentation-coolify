import { fileURLToPath, URL } from 'node:url'
import yaml from 'vite-plugin-yaml'
import { defineConfig } from 'vitepress'
import { useSidebar, useOpenapi } from 'vitepress-openapi'
import spec from '../public/openapi.json' assert { type: 'json' }

const sidebar = useSidebar({ spec, collapsible: true })

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Coolify Docs",
  description: "Self hosting with super powers",
  base: '/docs/',
  cleanUrls: true,
  lastUpdated: true,
  // Added ignoreDeadLinks to temporarily fix build error
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Coolify Cloud', link: 'https://coolify.io/pricing/' },
      {
        text: 'Resources',
        items: [
          { text: 'Releases', link: 'https://github.com/coollabsio/coolify/releases' },
          { text: 'Support', link: 'https://coolify.io/' },
          { text: 'Sponsor us', link: 'https://coolify.io/sponsorships/' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/coollabsio/documentation-coolify/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coollabsio/coolify' },
      { icon: 'discord', link: 'https://discord.gg/coolify' },
      { icon: 'x', link: 'https://x.com/coolifyio' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        collapsed: false,
        items: [
          { text: 'What is Coolify?', link: '/what-is-coolify' },
          { text: 'Cloud vs Self-Hosted', link: '/cloud-vs-selfhost' },
          { text: 'Installation', link: '/installation' },
          { text: 'Upgrade', link: '/upgrade' },
          { text: 'Downgrade', link: '/downgrade' },
          { text: 'Uninstallation', link: '/uninstallation' },
        ],
      },
      {
        text: 'Contribute',
        collapsed: true,
        items: [
          { text: 'Coolify', link: '/contribute/coolify' },
          { text: 'New Service', link: '/contribute/service' },
          { text: 'Documentation', link: '/contribute/documentation' },
        ],
      },
      {
        text: 'Applications',
        collapsed: true,
       items: [
          { 
            text: 'Overview', 
            link: '/applications/index', 
            items: [
              { text: 'Django', link: '/applications/django' },
              { text: 'Jekyll', link: '/applications/jekyll' },
              { text: 'Laravel', link: '/applications/laravel' },
              { text: 'Phoenix', link: '/applications/phoenix' },
              { text: 'Ruby on Rails', link: '/applications/rails' },
              { text: 'Symfony', link: '/applications/symfony' },
              { text: 'Next.js', link: '/applications/nextjs' },
              { text: 'Vite', link: '/applications/vite' },
              { text: 'Vue', link: '/applications/vuejs' },
              { text: 'Nuxt', link: '/applications/nuxt' },
              { text: 'SvelteKit', link: '/applications/svelte-kit' },
            ] 
          }
        ],
      },
      {
        text: 'Databases',
        collapsed: true,
        items: [
          { 
            text: 'Overview', 
            link: '/databases/index', 
            items: [
              { text: 'Backups', link: '/databases/backups' },
              { text: 'MySQL', link: '/databases/mysql' },
              { text: 'MariaDB', link: '/databases/mariadb' },
              { text: 'PostgreSQL', link: '/databases/postgresql' },
              { text: 'MongoDB', link: '/databases/mongodb' },
              { text: 'Redis', link: '/databases/redis' },
              { text: 'DragonFly', link: '/databases/dragonfly' },
              { text: 'KeyDB', link: '/databases/keydb' },
              { text: 'Clickhouse', link: '/databases/clickhouse' },
            ] 
          }
        ],
      },
      {
        text: 'Services',
        collapsed: true,
        items: [
          { 
            text: 'Overview', 
            link: '/services/overview', 
            items: [
              { text: 'ActivePieces', link: '/services/activepieces' },
              { text: 'AnythingLLM', link: '/services/anythingllm' },
              { text: 'Appwrite', link: '/services/appwrite' },
              { text: 'Authentik', link: '/services/authentik' },
              { text: 'BabyBuddy', link: '/services/babybuddy' },
              { text: 'Browserless', link: '/services/browserless' },
              { text: 'BudgE', link: '/services/budge' },
              { text: 'ChangeDetection', link: '/services/change-detection' },
              { text: 'ClassicPress', link: '/services/classicpress' },
              { text: 'Code-Server', link: '/services/code-server' },
              { text: 'Dashboard', link: '/services/dashboard' },
              { text: 'DokuWiki', link: '/services/dokuwiki' },
              { text: 'Duplicati', link: '/services/duplicati' },
              { text: 'Emby Stat', link: '/services/emby-stat' },
              { text: 'Emby', link: '/services/emby' },
              { text: 'Fider', link: '/services/fider' },
              { text: 'Filebrowser', link: '/services/filebrowser' },
              { text: 'Firefly III', link: '/services/firefly-iii' },
              { text: 'Formbricks', link: '/services/formbricks' },
              { text: 'Ghost', link: '/services/ghost' },
              { text: 'Gitea', link: '/services/gitea' },
              { text: 'Glitchtip', link: '/services/glitchtip' },
              { text: 'Grafana', link: '/services/grafana' },
              { text: 'Grocy', link: '/services/grocy' },
              { text: 'Heimdall', link: '/services/heimdall' },
              { text: 'Jellyfin', link: '/services/jellyfin' },
              { text: 'Kuzzle', link: '/services/kuzzle' },
              { text: 'Logto', link: '/services/logto' },
              { text: 'Meilisearch', link: '/services/meilisearch' },
              { text: 'Metabase', link: '/services/metabase' },
              { text: 'Metube', link: '/services/metube' },
              { text: 'MinIO', link: '/services/minio' },
              { text: 'Plausible', link: '/services/plausible' },
              { text: 'Statusnook', link: '/services/statusnook' },
            ] 
          }
        ],
      },
      {
        text: 'Knowledge Base',
        collapsed: true,
        items: [
          { 
            text: 'FAQ', 
            link: '/knowledge-base/faq', 
            items: [
              { 
                text: 'Internal',
                collapsed: true,
                items: [
                  {
                    text: 'Scalability', 
                    link: '/knowledge-base/internal/scalability'
                  },
                  {
                    text: 'Terminal', 
                    link: '/knowledge-base/internal/terminal'
                  }
                ] 
              },
              { text: 'Self-hosted Instance', 
                collapsed: true,
                items: [
                  { text: 'Monitoring', link: '/knowledge-base/monitoring' },
                  { text: 'Notifications', link: '/knowledge-base/notifications' },
                  { text: 'Coolify Updates', link: '/knowledge-base/self-update' },
                  { text: 'Commands', link: '/knowledge-base/commands' },
                  { text: 'Delete User', link: '/knowledge-base/delete-user' },
                  { text: 'OAuth', link: '/knowledge-base/oauth' },
                ] 
              },
              { 
                text: 'DNS & Domains',
                collapsed: true,
                items: [
                  { text: 'DNS Configuration', link: '/knowledge-base/dns-configuration' },
                  { text: 'Domains', link: '/knowledge-base/domains' },
                ] 
              },
              { 
                text: 'Resources',
                collapsed: true,
                items: [
                  { text: 'Environment Variables', link: '/knowledge-base/environment-variables' },
                  { text: 'Persistent Storage', link: '/knowledge-base/persistent-storage' },
                  { text: 'Drain Logs', link: '/knowledge-base/drain-logs' },
                  { text: 'Health Checks', link: '/knowledge-base/health-checks' },
                  { text: 'Cron Syntax', link: '/knowledge-base/cron-syntax' },
                ] 
              },
              { 
                text: 'How-Tos',
                collapsed: true,
                items: [
                  { text: 'Load-balancing on Hetzner', link: '/knowledge-base/load-balancing-on-hetzner' },
                  { text: 'Wordpress Multisite', link: '/knowledge-base/wordpress-multisite' },
                  { text: 'Raspberry Pi OS Setup', link: '/knowledge-base/raspberry-pi-os-setup' },
                  { text: 'Private NPM Registry', link: '/knowledge-base/private-npm-registry' },
                  { text: 'Ollama with GPU', link: '/knowledge-base/ollama-with-gpu' },
                ] 
              },
              { 
                text: 'Git',
                collapsed: true,
                items: [
                  { text: 'Github', collapsed: true, items: [
                    { text: 'Integrations', link: '/knowledge-base/git/github/integration' },
                    { text: 'Github Actions', link: '/knowledge-base/git/github/github-actions' },
                  ] },
                  { text: 'Gitlab', collapsed: true, items: [
                    { text: 'Integrations', link: '/knowledge-base/git/gitlab/integration' },
                  ] },
                  { text: 'Bitbucket', collapsed: true, items: [
                    { text: 'Integrations', link: '/knowledge-base/git/bitbucket/integration' },
                  ] },
                  { text: 'Gitea', collapsed: true, items: [
                    { text: 'Integrations', link: '/knowledge-base/git/gitea/integration' },
                  ] },
                ] 
              },
              { 
                text: 'Servers',
                collapsed: true,
                items: [
                  { text: 'Introduction', link: '/knowledge-base/server/introduction' },
                  { text: 'Automated Cleanup', link: '/knowledge-base/server/automated-cleanup' },
                  { text: 'Build Server', link: '/knowledge-base/server/build-server' },
                  { text: 'Firewall', link: '/knowledge-base/server/firewall' },
                  { text: 'Multiple Servers', link: '/knowledge-base/server/multiple-servers' },
                  { text: 'Sentinel and Metrics', link: '/knowledge-base/server/sentinel' },
                  { text: 'Non-root User', link: '/knowledge-base/server/non-root-user' },
                  { text: 'OpenSSH', link: '/knowledge-base/server/openssh' },
                  { text: 'Oracle Cloud', link: '/knowledge-base/server/oracle-cloud' },
                  { text: 'Proxies', link: '/knowledge-base/server/proxies' },
                ] 
              },
              { 
                text: 'S3',
                collapsed: true,
                items: [
                  { text: 'Introduction', link: '/knowledge-base/s3/introduction' },
                  { text: 'AWS', link: '/knowledge-base/s3/aws' },
                  { text: 'R2', link: '/knowledge-base/s3/r2' },
                ] 
              },
              { 
                text: 'Docker',
                collapsed: true,
                items: [
                  { text: 'Compose', link: '/knowledge-base/docker/compose' },
                  { text: 'Docker Commands', link: '/knowledge-base/docker/custom-commands' },
                  { text: 'Registry', link: '/knowledge-base/docker/registry' },
                  { text: 'Swarm', link: '/knowledge-base/docker/swarm' },
                ] 
              },
              { 
                text: 'Cloudflare',
                collapsed: true,
                items: [
                  { text: 'Tunnels', link: '/knowledge-base/cloudflare/tunnels' },
                ] 
              },
              { 
                text: 'Traefik',
                collapsed: true,
                items: [
                  { text: 'Basic Auth Middleware', link: '/knowledge-base/traefik/basic-auth' },
                  { text: 'Custom SSL Certificates', link: '/knowledge-base/traefik/custom-ssl-certs' },
                  { text: 'Dashboard', link: '/knowledge-base/traefik/dashboard' },
                  { text: 'Dynamic Configurations', link: '/knowledge-base/traefik/dynamic-configurations' },
                  { text: 'Healthcheck', link: '/knowledge-base/traefik/healthcheck' },
                  { text: 'Load Balancing', link: '/knowledge-base/traefik/load-balancing' },
                  { text: 'Redirects', link: '/knowledge-base/traefik/redirects' },
                  { text: 'Wildcard SSL Certificates', link: '/knowledge-base/traefik/wildcard-certificates' }
                ] 
              },
            ] 
          }
        ],
      },
      {
        text: 'API Reference',
        collapsed: true,
        items: [
          { 
            text: 'Authorization',
            link: '/api-reference/authorization',
            items: [
              { 
                text: 'API', 
                collapsed: true,
                // link: '/api-reference/api/', // disabled for now, you can enable it if you want to
                items: [
                  ...sidebar.generateSidebarGroups({
                    /**
                     * Optionally, you can filter paths by a prefix. Default is an empty string.
                     */
                    startsWith: 'operations',
    
                    /**
                     * Optionally, you can specify if the sidebar items are collapsible. Default is true.
                     */
                    collapsible: true,
                    
                    /**
                     * Optionally, you can specify a depth for the sidebar items. Default is 6, which is the maximum VitePress sidebar depth.
                     */
                    depth: 6,
    
                    /**
                     * Optionally, you can specify a link prefix for all generated sidebar items. Default is `/operations/`.
                     */
                    linkPrefix: '/api-reference/api/operations/',
    
                    /**
                     * Optionally, you can specify a template for the sidebar items. You can see the default value
                     * in `sidebarItemTemplate` function in the `useSidebar` composable.
                     */
                    //sidebarItemTemplate: (method: string, path: string): string => `[${method}] ${path}`,
                }),

                ]
              }             
            ]
          },
        ],
      },
      {
        text: 'Troubleshoot',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/troubleshoot/overview' },
          { text: 'Wildcard SSL Certificate', link: '/troubleshoot/wildcard-ssl-certs' },
          { text: 'Dashboard Inaccessible via Instance Domain', link: '/troubleshoot/dashboard-inaccessible-via-domain' },
          { text: 'Server Crash during Build', link: '/troubleshoot/server-crash-during-build' },
          { text: 'SSL Certificate Failed', link: '/troubleshoot/ssl-cert-not-generating' }
        ],
      },
      {
        text: 'Resources',
        collapsed: true,
        items: [
          { text: 'Team', link: '/resource/team' },
          { text: 'Support', link: '/support' },
          { text: 'Sponsors', link: '/resource/sponsors' },
        ],
      },
    ],
    
  },
  
  markdown: {},

  rewrites: {},

  vite: {
    plugins: [yaml as any],
    assetsInclude: ['**/*.yml'],
    build: {
      chunkSizeWarningLimit: 5000
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/Landing/HeroHeader.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPBadge\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPBadge.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPNavBar.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPSidebar\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPSidebar.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFeatures\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFeatures.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFeature.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPLocalNav\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPLocalNav.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPDocAside\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPDocAside.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
