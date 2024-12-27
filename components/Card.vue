<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="rounded-lg border p-4 shadow-sm">
    <h3 v-if="title" class="text-lg font-medium mb-2">{{ title }}</h3>
    <slot />
  </div>
</template>


