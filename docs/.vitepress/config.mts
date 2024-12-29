import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Coolify Docs",
  description: "Self hosting with super powers",
  cleanUrls: true,
  // Added ignoreDeadLinks to temporarily fix build error
  ignoreDeadLinks: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
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
          { text: 'What is Coolify', link: '/what-is-coolify' },
          { text: 'Quickstart', link: '/quickstart' },
          { text: 'Installation', link: '/installation' },
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
              { text: 'Next.js', link: '/applications/phoenix' },
              { text: 'Laravel', link: '/applications/laravel' },
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
              { text: 'Self-hosted Instance', link: '/knowledge-base/self-hosted-instance', items: [] },
              { text: 'DNS & Domains', link: '/knowledge-base/dns-domains', items: [] },
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
                link: '/api-reference/API/overview',
                items: [
                  {
                    text: 'Overview',
                    link:   '/api-reference/api/overview'
                  }
                ]
              }             
            ]
          },
        ],
      },
      {
        text: 'About',
        collapsed: true,
        items: [
          { text: 'Team', link: '/company/team' }
        ],
      },
    ],
    
  },

  rewrites: {},

  vite: {
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
        }
      ]
    }
  }
})
