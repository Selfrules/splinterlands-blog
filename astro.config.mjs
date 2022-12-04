import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: "https://splinterlandsblog.it",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Tabella dei contenuti",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
