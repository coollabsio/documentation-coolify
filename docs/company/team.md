---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'


const coreMembers = [
  {
    avatar: '../images/team/andras.webp',
    name: 'Andras Bacsai',
    title: 'Founder, Lead Developer',
    links: [
      { icon: 'github', link: 'https://github.com/andrasbacsai' },
      { icon: 'expedia', link: 'https://heyandras.dev' },
      { icon: 'x', link: 'https://x.com/heyandras' }
    ]
  },
  {
    avatar: '../images/team/peak.webp',
    name: 'Peaklabs Dev',
    title: 'Core Developer',
    links: [
      { icon: 'github', link: 'https://github.com/peaklabs-dev' },
      { icon: 'x', link: 'https://x.com/peaklabs_dev' }
    ]
  },
  {
    avatar: '../images/team/shadowarcanist.webp',
    name: 'ShadowArcanist',
    title: 'Community Lead, Docs Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/shadowarcanist' },
      { icon: 'expedia', link: 'https://shadowarcanist.com' },
      { icon: 'x', link: 'https://x.com/shadowarcanist' }
    ]
  },
  {
    avatar: '../images/team/serdar.webp',
    name: 'Serdar Yerdelen',
    title: 'Community Moderator, Docs Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/justserdar' },
      { icon: 'expedia', link: 'https://justserdar.dev' },
      { icon: 'x', link: 'https://x.com/darwebdb' }
    ]
  },
  {
    avatar: '../images/team/aditya.webp',
    name: 'Aditya Tripathi',
    title: 'Developer, Community Moderator',
    links: [
      { icon: 'github', link: 'https://github.com/shadowarcanist' },
      { icon: 'expedia', link: 'https://adiology.dev' },
      { icon: 'x', link: 'https://x.com/AdityaTripathiD' }
    ]
  },
  {
    avatar: '../images/team/coollabs.webp',
    name: 'You?',
    title: 'Will You Be Next?'
  }
]

const sponsors = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Hetzner',
    links: [
      { icon: 'expedia', link: 'https://adiology.dev' },
      { icon: 'x', link: 'https://x.com/' },
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      CoolLabs Team
    </template>
    <template #lead>
      The development of Coolify is guided by an international team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>

  <!-- Core Team Members Section -->
  <VPTeamMembers size="small" :members="coreMembers" />

  <!-- sponsors Section -->
  <VPTeamPageSection>
    <template #title>Sponsors</template>
    <template #lead>
      We have amazing sponsors who support the development of Coolify.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="sponsors" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
