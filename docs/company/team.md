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
    avatar: 'https://avatars.githubusercontent.com/u/5845193?v=4',
    name: 'Andras Bacsai',
    title: 'Founder',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
      { icon: 'expedia', link: 'https://google.com/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/122374094?v=4',
    name: 'Peaklabs Dev',
    title: 'Core Developer',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Member 3',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Member 4',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Member 5',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Member 6',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Member 6',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Member 6',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  }
]

const sponsors = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Hetzner',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Logto',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Tolgee',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'QuantCDN',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Arcjet',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'ubicloud',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'algora',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'comit.',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60715044?s=160&v=4',
    name: 'Syntax',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
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
