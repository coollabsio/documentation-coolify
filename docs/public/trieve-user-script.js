// ==UserScript==
// @name         Coolify
// @namespace    http://tampermonkey.net/
// @version      2025-01-16
// @description  try to take over the world!
// @author       You
// @match        https://coolify.io/docs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coolify.io
// @grant        none
// ==/UserScript==

const removeAllClickListeners = (element) => {
  const newElement = element.cloneNode(true);
  element.parentNode.replaceChild(newElement, element);
  return newElement;
};

const makeDefaultSearchTrieve = async () => {
  let defaultSearchBar = null;
  let retries = 0;
  while (!defaultSearchBar && retries < 10) {
    for (const el of document.querySelectorAll("*")) {
      if (el.querySelector('#local-search > button')) {
        defaultSearchBar = el.querySelector('#local-search > button');
        break;
      }
    }
    retries++;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  if (!defaultSearchBar) {
    return;
  }

  defaultSearchBar = removeAllClickListeners(defaultSearchBar);

  defaultSearchBar.onclick = () => {
    const event = new CustomEvent("trieve-open-with-text", {
      detail: { text: "" },
    });
    window.dispatchEvent(event);
  };
};

window.addEventListener('load', function() {
  makeDefaultSearchTrieve();
});

const originalPushState = history.pushState;
history.pushState = function() {
  originalPushState.apply(this, arguments);
  makeDefaultSearchTrieve();
};


(async function () {
  "use strict";
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.trieve.ai/beta/search-component/index.css";
  document.head.appendChild(link);

  import("https://cdn.trieve.ai/beta/search-component/vanilla/index.js").then(
    async (module) => {
      const { renderToDiv } = module;
      const root = document.createElement("div");
      root.classList.add("trigger");
      document.body.appendChild(root);
      const colorScheme = document.documentElement?.classList?.contains("dark")
        ? "dark"
        : null;

      renderToDiv(root, {
        apiKey: "tr-4ge266qRg6AzfMAyWyqqUjmG3VC1CYYM",
        datasetId: "cae68afa-93e1-4fb2-9945-693e65906409",
        baseUrl: "https://api.trieve.ai",
        type: "docs",
        analytics: true,
        theme: colorScheme === "dark" ? "dark" : null,
        brandLogoImgSrcUrl: "https://coolify.io/docs/coolify-logo-transparent.png",
        brandName: "Coolify",
        brandColor: "#9664f3",
        placeholder: "How can I help?",
        defaultSearchQueries: ["Backups", "Postgresql", "Private NPM registry"],
        defaultAiQuestions: ["How to fix expired GitHub personal access token (PAT)?", "My Raspberry Pi is crashing", "How to use Docker Compose?"],
        defaultSearchMode: "search",
        showFloatingButton: "true",
        cssRelease: "none",
        hideOpenButton: true,
      });
    },
    (error) => {
      console.error("Failed to load module:", error);
    }
  );
})();
