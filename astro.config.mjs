import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";
import houston from "./houston.theme.json";

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
        ],
      },
    }),
    expressiveCode({
      themes: [houston],
      frames: false,
    }),
    mdx(),
  ],
});
