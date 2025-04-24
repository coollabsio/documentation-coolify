// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import { theme, useOpenapi } from "vitepress-openapi/client";
import DefaultTheme from 'vitepress/theme'
import spec from "./openapi.json" assert { type: "json" };
import './style.css'
import "./tailwind.postcss";
import "vitepress-openapi/dist/style.css";
// Custom Scrollbars on Windows
import "./scrollbar.css";
import 'virtual:group-icons.css'
// @ts-ignore
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";

// Import components
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
import { DirectiveBinding } from "vue";

export default {
  extends: DefaultTheme,
  Layout: Landing,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app);

    useOpenapi({
      spec,
    });
    
    // @ts-ignore
    theme.enhanceApp({ app });

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

    router.onAfterRouteChange = () => {
      if (typeof window !== "undefined" && (window as any).plausible) {
        (window as any).plausible("pageview");
      }
    };
    app.directive("plausible", {
      mounted(el: HTMLElement, binding: DirectiveBinding) {
        const eventName = binding.arg;
        const eventData = binding.value || {};

        el.addEventListener("click", () => {
          if (
            typeof window !== "undefined" &&
            (window as any).plausible &&
            eventName
          ) {
            (window as any).plausible(eventName, { props: eventData });
          }
        });
      },
    });
  },
} satisfies Theme
