<template>
  <Layout>
    <template #nav-bar-content-before>
      <VPNavBarLanding />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const versionMenu = ref<any>(null)
const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>