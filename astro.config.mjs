import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import astroExpressiveCode from "astro-expressive-code";
import macchiato from "./catppuccin-macchiato.theme.json";

import { rehypePrettyCode } from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        ph: [
          "code",
          "arrow-right",
          "arrow-left",
          "arrow-up-right",
          "sun",
          "moon",
          "github-logo",
          "linkedin-logo-fill",
          "x-logo",
          "envelope-simple",
        ],
      },
    }),
    astroExpressiveCode({
      themes: [macchiato],
    }),
    mdx({}),
  ],
});
