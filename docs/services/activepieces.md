---
title: ActivePieces
---

# Activepieces

![ActivePieces](/images/services/activepieces0.png)

## What is ActivePieces

Your friendliest open source all-in-one automation tool, designed to be extensible through a type-safe pieces framework written in Typescript.

## Screenshots

![build](/images/services/activepieces1.gif)
![templates](/images/services/activepieces2.gif)

## Installation & Configuration

This section provides detailed information about installing and configuring ActivePieces in your environment. You'll find system requirements, credentials, environment variables, and useful external resources organized in tabs below.

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'

defineProps<{
  services? : {
    id: string
    label: string
  }[]
}>()

const activeTab = ref('general')
const tabs = [
  { id: 'general', label: 'Overview & Requirements' },
  { id: 'credentials', label: 'Default Credentials' },
  { id: 'activepieces-env', label: 'ActivePieces Environment' },
  { id: 'postgres-env', label: 'PostgreSQL Environment' },
  { id: 'links', label: 'External Links' }
]

const currentIndex = computed(() => tabs.findIndex(tab => tab.id === activeTab.value))

const scrollTabIntoView = (tabId: string) => {
  nextTick(() => {
    const activeTabElement = document.querySelector(`[data-tab-id="${tabId}"]`)
    activeTabElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  })
}

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
  scrollTabIntoView(tabId)
}

type Direction = 'next' | 'prev'
const navigateTab = (direction: Direction) => {
  const newIndex = direction === 'next' 
    ? (currentIndex.value + 1) % tabs.length 
    : (currentIndex.value - 1 + tabs.length) % tabs.length
  const newTabId = tabs[newIndex].id
  setActiveTab(newTabId)
}
</script>

<div class="tabs-container">
  <div class="tabs-navigation">
    <button 
      class="group nav-arrow"
      @click="navigateTab('prev')"
      aria-label="Previous tab"
    >
      <svg class="size-10 left" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m6.523 12.5l3.735 3.735q.146.146.153.344q.006.198-.153.363q-.166.166-.357.168t-.357-.162l-4.382-4.383q-.243-.242-.243-.565t.243-.566l4.382-4.382q.147-.146.347-.153q.201-.007.367.159q.16.165.162.353q.003.189-.162.354L6.523 11.5h12.38q.214 0 .358.143t.143.357t-.143.357t-.357.143z"/></svg>
    </button>
    <div class="tabs-header">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :data-tab-id="tab.id"
        @click="setActiveTab(tab.id)"
        :class="['tab-button', { active: activeTab === tab.id }]"
      >
        {{ tab.label }}
      </button>
    </div>
    <button 
      class="group nav-arrow"
      @click="navigateTab('next')"
      aria-label="Next tab"
    >
      <svg v-if="currentIndex < tabs.length - 1" class="size-10 right" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17.073 12.5H5.5q-.213 0-.357-.143T5 12t.143-.357t.357-.143h11.573l-3.735-3.734q-.146-.147-.152-.345t.152-.363q.166-.166.357-.168t.357.162l4.383 4.383q.13.13.183.267t.053.298t-.053.298t-.183.268l-4.383 4.382q-.146.146-.347.153t-.367-.159q-.16-.165-.162-.354t.162-.354z"/></svg>
      <svg v-else class="size-10 rotate-90" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m6.921 9.5l3.439 3.439q.165.165.162.353q-.003.189-.162.354q-.166.165-.364.159t-.344-.153L5.566 9.566q-.131-.132-.184-.268T5.329 9t.053-.298t.184-.267L9.64 4.359q.165-.165.356-.165q.192 0 .357.165q.165.166.156.364t-.156.344L6.92 8.5h9.464q.67 0 1.143.472q.472.472.472 1.144V18.5q0 .214-.143.357T17.5 19t-.357-.143T17 18.5v-8.384q0-.27-.173-.443t-.442-.173z"/></svg>
    </button>
  </div>
  <div class="tab-content rounded-lg mt-2">
    <div v-show="activeTab === 'general'">
      <h3>System Requirements</h3>
      <ul>
        <li>🔲 <strong>CPU:</strong> 2 Cores</li>
        <li>💾 <strong>RAM:</strong> 2 GB</li>
        <li>💿 <strong>Storage:</strong> 10 GB</li>
        <li>🌐 <strong>Network:</strong> IPv4 Address Required</li>
      </ul>
      <div class="warning">
        <p>It takes around 5mins for the services to go healthy so don't deploy it and think the services is not working, wait for some time.</p>
      </div>
    </div>
    <div v-show="activeTab === 'credentials'">
      <h3>Default Login Credentials</h3>
      <ul>
        <li>👤 <strong>Username:</strong> admin</li>
        <li>🔑 <strong>Password:</strong> admin</li>
      </ul>
    </div>
    <div v-show="activeTab === 'activepieces-env'">
      <h3>ActivePieces Environment Variables</h3>
      <h4>Core Configuration</h4>
      <ul>
        <li><code>SERVICE_FQDN_ACTIVEPIECES</code>: The fully qualified domain name for your ActivePieces instance</li>
        <li><code>AP_API_KEY</code>: API key for authentication ($SERVICE_PASSWORD_64_APIKEY)</li>
      </ul>
    </div>
    <div v-show="activeTab === 'postgres-env'">
      <h3>PostgreSQL Environment Variables</h3>
      <ul>
        <li><code>POSTGRES_DB</code>: Database name (Default: activepieces)</li>
        <li><code>POSTGRES_PASSWORD</code>: Database password ($SERVICE_PASSWORD_POSTGRES)</li>
        <li><code>POSTGRES_USER</code>: Database user ($SERVICE_USER_POSTGRES)</li>
        <li><code>POSTGRES_PORT</code>: Database port (Default: 5432)</li>
      </ul>
    </div>
    <div v-show="activeTab === 'links'">
      <h3>External Links</h3>
      <ul>
        <li><a href="https://www.activepieces.com?utm_source=coolify.io" target="_blank">Official Website</a></li>
        <li><a href="https://github.com/activepieces/activepieces?utm_source=coolify.io" target="_blank">GitHub Repository</a></li>
      </ul>
    </div>
  </div>
</div>

<style>
.tabs-container {
  @apply my-6;
}

.tabs-navigation {
  @apply flex items-center gap-2;
}

.nav-arrow {
  @apply p-2 text-lg font-medium transition-colors duration-200 border-none bg-transparent;
  color: var(--vp-c-text-2);
}

.nav-arrow:hover {
  color: var(--vp-c-text-1);
  background: transparent;
}

.nav-arrow:hover svg.left {
  transform: translateX(-5px);
  transition: transform 0.3s ease-in-out;
}

.nav-arrow:hover svg.right {
  transform: translateX(5px);
  transition: transform 0.3s ease-in-out;
}

.tabs-header {
  @apply flex gap-2 border-b border-[var(--vp-c-divider)] mb-4;
  overflow-x: auto;
  -ms-overflow-style: none;  /* Hide scrollbar for IE and Edge */
  scrollbar-width: none;     /* Hide scrollbar for Firefox */
}

.tabs-header::-webkit-scrollbar {
  display: none;  /* Hide scrollbar for Chrome, Safari and Opera */
}

.tabs-header::-webkit-scrollbar-thumb {
  background-color: var(--vp-c-divider);
  border-radius: 3px;
}

.tabs-header::-webkit-scrollbar-track {
  background-color: transparent;
}

.tab-button {
  @apply px-4 py-2 text-sm font-medium relative transition-colors duration-200 whitespace-nowrap;
  color: var(--vp-c-text-2);
}

.tab-button:hover {
  color: var(--vp-c-text-1);
}

.tab-button.active {
  color: var(--vp-c-brand);
}

.tab-button.active::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-0.5;
  background-color: var(--vp-c-brand);
}

.tab-content {
  @apply p-4 rounded-b-lg;
  background-color: var(--vp-c-bg-soft);
  overflow-y: auto;
  -ms-overflow-style: none;  /* Hide scrollbar for IE and Edge */
  scrollbar-width: none;     /* Hide scrollbar for Firefox */
}

.tab-content::-webkit-scrollbar {
  display: none;  /* Hide scrollbar for Chrome, Safari and Opera */
}

.tab-content::-webkit-scrollbar-thumb {
  background-color: var(--vp-c-divider);
  border-radius: 3px;
}

.tab-content::-webkit-scrollbar-track {
  background-color: transparent;
}

.warning {
  @apply p-4 rounded-lg mt-4;
  background-color: var(--vp-c-yellow-dimm);
  color: var(--vp-c-yellow);
}
</style>