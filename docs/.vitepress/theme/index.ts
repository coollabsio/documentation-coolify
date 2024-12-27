// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './tailwind.postcss'
import Card from './components/Card.vue'
import CardGroup from './components/CardGroup.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // register your custom global components
    app.component('Card', Card)
    app.component('CardGroup', CardGroup)
  }
} satisfies Theme
