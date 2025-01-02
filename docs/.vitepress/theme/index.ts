// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './tailwind.postcss'
import Card from './components/Card.vue'
import CardGroup from './components/CardGroup.vue'
import Landing from './layouts/Landing.vue'
import Sections from './components/Landing/Sections.vue'
import Features from './components/Landing/Features.vue'
import Installer from './components/Landing/Installer.vue'
import Referral from './components/Landing/Referral.vue'
import Callout from './components/Callout.vue'
import TabBlock from './components/TabBlock.vue'
import ZoomableImage from './components/ZoomableImage.vue'

export default {
  extends: DefaultTheme,
  Layout: Landing,
  enhanceApp({ app, router, siteData }) {
    // register your custom global components
    app.component('Card', Card)
    app.component('CardGroup', CardGroup)
    app.component('LandingSection', Sections)
    app.component('LandingFeatures', Features)
    app.component('Referral', Referral)
    app.component('Quickstart', Installer)
    app.component('Callout', Callout)
    app.component('TabBlock', TabBlock)
    app.component('ZoomableImage', ZoomableImage)
  }
} satisfies Theme
