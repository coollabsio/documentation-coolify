---
aside: false
outline: false
title: API
toc: false
---

<script setup lang="ts">
import { useData } from 'vitepress'
import { useTheme, generateCodeSample } from 'vitepress-openapi'

const { isDark } = useData()

useTheme({
    codeSamples: {
        // List of languages to show in Code Samples section.
        langs: [
            'bruno',
            ...useTheme().getCodeSamplesLangs(),
        ],
        // List of available languages to select from.
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
    },
})

function generateBruRequest(request) {
  const { url, method, headers, body, query } = request;

  const methodLower = method.toLowerCase();

  const queryString = query && Object.keys(query).length
    ? `${url}?${new URLSearchParams(query).toString()}`
    : url;

  const headersSection = headers && Object.keys(headers).length
    ? `headers {\n${Object.entries(headers)
        .map(([key, value]) => `  ${key}: ${value}`)
        .join('\n')}\n}`
    : '';

  const bodySection = body
    ? `body {\n  ${JSON.stringify(body, null, 2).replace(/\n/g, '\n  ')}\n}`
    : '';

  const bruRequest = `${methodLower} {
  url: ${queryString}
}

${headersSection}

${bodySection}
`;

  return bruRequest
        .trim()
        .replace(/\n{2,}/g, '\n\n') // Remove extra newlines
}
</script>

<style>
:deep(.vp-doc a),
:deep([openapi] a),
:deep(a.grid) {
  border-bottom: none !important;
  text-decoration: none !important;
}

:deep(.vp-doc a:hover),
:deep([openapi] a:hover),
:deep(a.grid:hover) {
  color: var(--vp-c-brand-1);
  border-bottom: none !important;
  text-decoration: none !important;
}

/* Additional specific override for grid links */
:deep(a.grid.items-center) {
  border-bottom: none !important;
  text-decoration: none !important;
}
</style>

<OASpec :isDark="isDark" />

