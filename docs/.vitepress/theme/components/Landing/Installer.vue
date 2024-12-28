<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row gap-2">
            <VPBadge text="For Coolify Cloud"  />
            <VPBadge text="Self Host" type="warning" />
        </div>
        <h3 class="text-2xl font-bold tracking-wide">Quickstart</h3>
        <p class="text-sm font-medium">
            curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
        </p>
        <p class="text-xs font-medium">
            For detailed setup instructions, including firewall configuration and prerequisites, see the <a class="text-blue-500" href="https://docs.coolify.io/quickstart/installation" target="_blank">Quick Installation Guide</a>.
        </p>
        
    </div>
</template>

<script setup lang="ts">
import { VPButton, VPBadge } from 'vitepress/theme'

</script>
