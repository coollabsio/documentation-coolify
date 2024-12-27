import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Coolify Docs",
  description: "Self hosting with super powers",
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/public/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/public/logo.svg',
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
        text: 'Home',
        collapsed: false,
        items: [
          { text: 'What is Coolify', link: '/home/what-is-coolify' },
          { text: 'Quickstart', link: '/home/quickstart' },
          { text: 'Installation', link: '/home/installation' },
        ],
      },
      {
        text: 'Services',
        collapsed: false,
        items: [
          { text: 'Overview', 
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
        text: 'About',
        collapsed: false,
        items: [
          { text: 'Team', link: '/company/team' }
        ],
      },
    ],
    
  }
})
