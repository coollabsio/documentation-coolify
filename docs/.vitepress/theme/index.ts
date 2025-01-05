// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import { theme, useOpenapi } from "vitepress-openapi";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "./tailwind.postcss";
import "vitepress-openapi/dist/style.css";
import Card from "./components/Card.vue";
import CardGroup from "./components/CardGroup.vue";
import Landing from "./layouts/Landing.vue";
import Sections from "./components/Landing/Sections.vue";
import Features from "./components/Landing/Features.vue";
import Installer from "./components/Landing/Installer.vue";
import Referral from "./components/Landing/Referral.vue";
import Callout from "./components/Callout.vue";
import TabBlock from "./components/TabBlock.vue";
import ZoomableImage from "./components/ZoomableImage.vue";
import Globe from "./components/Landing/Globe.vue";
import Browser from "./components/Landing/Browser.vue";
import { load } from 'js-yaml'
import rawSpec from '/openapi.yml?raw'

export default {
  extends: DefaultTheme,
  Layout: Landing,
  enhanceApp({ app, router, siteData }) {
    const spec = load(rawSpec)
    const openapi = useOpenapi({
      spec,
      base: "/docs/api-reference/api/overview/",
      label: "API",
    });
    // Use theme.enhanceApp with both app and openapi
    theme.enhanceApp({ app, openapi });
    app.component("Card", Card);
    app.component("CardGroup", CardGroup);
    app.component("LandingSection", Sections);
    app.component("LandingFeatures", Features);
    app.component("Referral", Referral);
    app.component("Quickstart", Installer);
    app.component("Callout", Callout);
    app.component("TabBlock", TabBlock);
    app.component("ZoomableImage", ZoomableImage);
    app.component("Globe", Globe);
    app.component("Browser", Browser);
  },
} satisfies Theme;
