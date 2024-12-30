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

<script setup>
import { ref } from 'vue'

const activeTab = ref('general')
const tabs = [
  { id: 'general', label: 'Overview & Requirements' },
  { id: 'credentials', label: 'Default Credentials' },
  { id: 'activepieces-env', label: 'ActivePieces Environment' },
  { id: 'postgres-env', label: 'PostgreSQL Environment' },
  { id: 'links', label: 'External Links' }
]
</script>

<div class="tabs-container">
  <div class="tabs-header">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      @click="activeTab = tab.id"
      :class="['tab-button', { active: activeTab === tab.id }]"
    >
      {{ tab.label }}
    </button>
  </div>
  <div class="tab-content">
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

.tabs-header {
  @apply flex gap-2 border-b border-[var(--vp-c-divider)] mb-4;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--vp-c-divider) transparent;
}

.tabs-header::-webkit-scrollbar {
  width: 6px;
  height: 6px;
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
  max-height: 80vh;
  scrollbar-width: thin;
  scrollbar-color: var(--vp-c-divider) transparent;
}

.tab-content::-webkit-scrollbar {
  width: 6px;
  height: 6px;
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