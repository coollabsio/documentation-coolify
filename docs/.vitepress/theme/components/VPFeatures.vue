<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

export type FeatureIcon = {
  src?: string
  alt?: string
  width?: number
  height?: number
  wrap?: boolean
}

export type Feature = {
  icon?: FeatureIcon | string
  title: string
  details: string
  link?: string
  linkText?: string
  rel?: string
  target?: string
}

const props = defineProps<{
  features: Feature[]
}>()

const grid = computed(() => {
  const length = props.features.length
  if (!length) return
  if (length === 2) return 'grid-2'
  if (length === 3) return 'grid-3'
  if (length % 3 === 0) return 'grid-6'
  if (length > 3) return 'grid-4'
})

const container = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const getTransitionDelay = (index: number) => `${index * 0.1}s`

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect() // Optional: stop observing once triggered
        }
      })
    },
    {
      threshold: 0.1, // Trigger when 10% of the container is visible
      rootMargin: '50px' // Start animation slightly before the element comes into view
    }
  )

  if (container.value) {
    observer.observe(container.value)
  }
})
</script>

<template>
  <div v-if="features" class="VPFeatures" ref="container">
    <div class="container">
      <div class="items">
        <div class="transition-wrapper">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="item"
            :class="[grid, { 'is-visible': isVisible }]"
            :style="{ '--delay': getTransitionDelay(index) }"
          >
            <component
              :is="feature.link ? 'a' : 'div'"
              class="feature-box"
              :href="feature.link"
              :rel="feature.rel"
              :target="feature.target"
            >
              <article class="box">
                <div class="flex flex-col">
                  <div v-if="typeof feature.icon === 'object' && feature.icon.wrap" class="icon mb-4">
                    <img
                      :src="feature.icon.src"
                      :alt="feature.icon.alt"
                      :height="feature.icon.height || 48"
                      :width="feature.icon.width || 48"
                    />
                  </div>
                  <img
                    v-else-if="typeof feature.icon === 'object'"
                    :src="feature.icon.src"
                    :alt="feature.icon.alt"
                    :height="feature.icon.height || 48"
                    :width="feature.icon.width || 48"
                    class="icon-img mb-4"
                  />
                  <div v-else-if="feature.icon" class="icon mb-4" v-html="feature.icon" />
                  <h2 class="title" v-html="feature.title" />
                </div>
                <p v-if="feature.details" class="details" v-html="feature.details" />
                <div v-if="feature.linkText" class="link-text">
                  <p class="link-text-value">
                    {{ feature.linkText }}
                    <span class="i-heroicons-arrow-right link-text-icon" />
                  </p>
                </div>
              </article>
            </component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: var(--delay, 0s);
  will-change: opacity, transform;
}

.item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.item :deep(.VPFeature) {
  border: 1px solid transparent;
  transition: border-color 0.25s;
}

.item :deep(.VPFeature):hover {
  border-color: var(--vp-c-brand-1);
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}

.feature-box {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
  text-decoration: none;
  color: inherit;
}

.feature-box:hover {
  border-color: var(--vp-c-brand-1);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.icon,
.icon-img {
  margin-bottom: 16px;
  flex-shrink: 0;
}

.title {
  margin: 0;
  text-align: left;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.link-text {
  padding-top: 8px;
}

.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.link-text-icon {
  margin-left: 6px;
}

.transition-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
  width: 100%;
}
</style>