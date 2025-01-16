---
aside: false
outline: false
title: API Reference
toc: false
---

<script setup lang="ts">
import { useData } from 'vitepress'
import { useTheme, generateCodeSample } from 'vitepress-openapi'

const { isDark } = useData()

useTheme({
    codeSamples: {
        langs: [
            'bruno',
            ...useTheme().getCodeSamplesLangs(),
        ],
        availableLanguages: [
            {
                lang: 'bruno',
                label: 'Bruno',
                highlighter: 'plaintext',
            },
            ...useTheme().getCodeSamplesAvailableLanguages(),
        ],
        defaultLang: 'bruno',
        generator: (lang, request) => {
            if (lang === 'bruno') {
                return generateBruRequest(request)
            }

            return generateCodeSample(lang, request)
        },
    }
})

function generateBruRequest(request) {
    // ... existing generateBruRequest code ...
}
</script>

<style>
/* ... existing styles ... */
</style>

<OASpec :isDark="isDark" /> 