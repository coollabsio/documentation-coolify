<template>
    <div class="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl2:grid-cols-4">
        <template v-for="(card, i) in cards" :key="i">
            <Card 
                :title="card.title" 
                :image-size="card.imageSize" 
                :image="card.image" 
                :imageAlt="card.imageAlt" 
            />
        </template>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    columns: number
    cards: {
        title: string
        image: string
        imageAlt: string
        imageSize: 'small' | 'medium' | 'large'
    }[]
}>()

// TODO: Relocate this cards object once we can directly use the <script setup> in overview.md, this seems to break the page at the moment 
// see /docs/content/company/teams.md for the desired pattern.
const cards = [
    {
        title: 'ActivePieces',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'ActivePieces - Open source no-code business automation',
        imageSize: 'small',
        url: '/services/activepieces'
    },
    {
        title: 'AnythingLLM',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'AnythingLLM - Open-source LLM client',
        imageSize: 'small',
        url: '/services/anythingllm'
    },
    {
        title: 'Appsmith',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'Appsmith - Low-code application platform',
        imageSize: 'small',
        url: '/services/appsmith'
    },
    {
        title: 'Appwrite',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'Appwrite - Backend-as-a-service platform',
        imageSize: 'small',
        url: '/services/appwrite'
    },
    {
        title: 'Argilla',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'Argilla - Open-source platform for conversational AI',
        imageSize: 'small',
        url: '/services/argilla'
    },
    {
        title: 'Authentik',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'Authentik - Open-source Identity Provider',
        imageSize: 'small',
        url: '/services/authentik'
    },
    {
        title: 'Baby Buddy',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'Baby Buddy - Baby tracking app',
        imageSize: 'small',
        url: '/services/babybuddy'
    },
    {
        title: 'Beszel',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'Beszel - Server monitoring hub',
        imageSize: 'small',
        url: '/services/beszel'
    },
    {
        title: 'Browserless',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'Browserless - Headless Chrome service',
        imageSize: 'small',
        url: '/services/browserless'
    },
    {
        title: 'BudgE',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'BudgE - Personal finance app',
        imageSize: 'small',
        url: '/services/budge'
    },
    {
        title: 'WordPress',
        image: 'https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg',
        imageAlt: 'WordPress - Website and blogging platform',
        imageSize: 'small',
        url: '/services/wordpress'
    }
]
</script>

