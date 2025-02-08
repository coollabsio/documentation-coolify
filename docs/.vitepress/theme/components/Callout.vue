<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  type?: 'tip' | 'warning' | 'danger' | 'info' | 'success'
  title?: string
}>(), {
  type: 'tip',
  title: ''
})

// Add type for the callout data
type CalloutType = {
  class: string
  icon: string
}

type CalloutTypeData = Record<'tip' | 'warning' | 'danger' | 'info' | 'success', CalloutType>

const typeData = computed((): CalloutType => {
  const data: CalloutTypeData = {
    tip: {
      class: 'tip',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.375 8.625L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10l-.625-1.375ZM18.05 3.95L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6l-.95-2.05ZM9 22q-.825 0-1.413-.588T7 20h4q0 .825-.588 1.413T9 22Zm-3-3q-.425 0-.713-.288T5 18q0-.425.288-.713T6 17h6q.425 0 .713.288T13 18q0 .425-.288.713T12 19H6Zm-.75-3q-1.725-1.025-2.738-2.75T1.5 9.5q0-3.125 2.188-5.313T9 2q3.125 0 5.313 2.188T16.5 9.5q0 2.025-1.012 3.75T12.75 16h-7.5Zm.6-2h6.3q1.125-.8 1.738-1.975T14.5 9.5q0-2.3-1.6-3.9T9 4Q6.7 4 5.1 5.6T3.5 9.5q0 1.35.612 2.525T5.85 14ZM9 14Z"/></svg>'
    },
    warning: {
      class: 'warning',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.99L19.53 19H4.47zM2.74 18c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0zM11 11v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1m0 5h2v2h-2z"/></svg>'
    },
    danger: {
      class: 'danger',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.344 20q-.323 0-.628-.13q-.304-.132-.522-.349L4.48 15.806q-.217-.217-.348-.522T4 14.656V9.344q0-.323.13-.628q.132-.304.349-.522L8.194 4.48q.217-.218.522-.348Q9.021 4 9.344 4h5.312q.323 0 .628.13q.305.132.522.349l3.715 3.715q.218.217.348.522q.131.305.131.628v5.312q0 .323-.13.628q-.132.305-.349.522l-3.715 3.715q-.217.218-.522.348q-.305.131-.628.131zM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-6.292l2.496 2.496q.14.14.344.15t.364-.15t.16-.354t-.16-.354L12.708 12l2.496-2.496q.14-.14.15-.344t-.15-.364t-.354-.16t-.354.16L12 11.292L9.504 8.796q-.14-.14-.344-.15t-.364.15t-.16.354t.16.354L11.292 12l-2.496 2.496q-.14.14-.15.344t.15.364t.354.16t.354-.16zM12 12"/></svg>'
    },
    info: {
      class: 'info',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>'
    },
    success: {
      class: 'success',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>'
    }
  }
  return data[props.type]
})
</script>

<template>
  <div class="custom-block" :class="typeData.class">
    <div class="content-wrapper">
      <p class="custom-block-title">
        <span v-if="!typeData.icon.includes('<svg')" class="callout-icon">{{ typeData.icon }}</span>
        <span v-else v-html="typeData.icon" class="callout-icon" />
        {{ title || type.charAt(0).toUpperCase() + type.slice(1) }}:
      </p>
      <div class="custom-block-content" :style="{ color: `var(--vp-custom-block-${type}-text)` }">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-block {
  margin: 16px 0;
  border-radius: 6px;
  padding: 0 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--vp-custom-block-tip-bg);
  border: 1px solid var(--vp-custom-block-tip-border);
}

.content-wrapper {
  width: 100%;
  padding: 16px 0 16px;
}

.custom-block.tip {
  border-color: var(--vp-custom-block-tip-border);
  background-color: var(--vp-custom-block-tip-bg);
}

.custom-block.warning {
  border-color: var(--vp-custom-block-warning-border);
  background-color: var(--vp-custom-block-warning-bg);
}

.custom-block.danger {
  border-color: var(--vp-custom-block-danger-border);
  background-color: var(--vp-custom-block-danger-bg);
}

.custom-block.info {
  border-color: var(--vp-custom-block-info-border);
  background-color: var(--vp-custom-block-info-bg);
}

.custom-block.success {
  border-color: var(--vp-custom-block-success-border);
  background-color: var(--vp-custom-block-success-bg);
}

.custom-block-title {
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
}

.custom-block.tip .custom-block-title {
  color: var(--vp-custom-block-tip-text);
}

.custom-block.warning .custom-block-title {
  color: var(--vp-custom-block-warning-text);
}

.custom-block.danger .custom-block-title {
  color: var(--vp-custom-block-danger-text);
}

.custom-block.info .custom-block-title {
  color: var(--vp-custom-block-info-text);
}

.custom-block.success .custom-block-title {
  color: var(--vp-custom-block-success-text);
}

/* Add code block styling within custom blocks */
.custom-block :deep(.language-sh) {
  margin: 8px 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}

.custom-block p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin: 8px 0;
}

/* Add styling for the SVG icons */
.callout-icon {
  display: inline-flex;
  align-items: center;
}

.callout-icon :deep(svg) {
  width: 24px;
  height: 24px;
  color: var(--vp-custom-block-tip-text);
}

/* Apply correct SVG colors based on callout type */
.custom-block.tip .callout-icon :deep(svg) {
  color: var(--vp-custom-block-tip-text);
}

.custom-block.warning .callout-icon :deep(svg) {
  color: var(--vp-custom-block-warning-text);
}

.custom-block.danger .callout-icon :deep(svg) {
  color: var(--vp-custom-block-danger-text);
}

.custom-block.info .callout-icon :deep(svg) {
  color: var(--vp-custom-block-info-text);
}

.custom-block.success .callout-icon :deep(svg) {
  color: var(--vp-custom-block-success-text);
}
</style>