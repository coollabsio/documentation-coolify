import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { createOpenAPI, attachFile } from 'fumadocs-openapi/server';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    // adds a badge to each page item in page tree
    attachFile,
  },

  // Add this to enable icon rendering from frontmatter
  icon(iconName) {
    if (!iconName) return;
    if (iconName in icons) {
      return createElement(icons[iconName as keyof typeof icons]);
    }
  },
});

export const openapi = createOpenAPI({
  // options
});
