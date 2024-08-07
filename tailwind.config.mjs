import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      textWrap: {
        balance: "balance",
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: {
          DEFAULT: "var(--text)",
          50: "var(--text-50)",
          100: "var(--text-100)",
          200: "var(--text-200)",
          300: "var(--text-300)",
          400: "var(--text-400)",
          500: "var(--text-500)",
          600: "var(--text-600)",
          700: "var(--text-700)",
          800: "var(--text-800)",
          900: "var(--text-900)",
          950: "var(--text-950)",
        },
        background: {
          DEFAULT: "var(--background)",
          50: "var(--background-50)",
          100: "var(--background-100)",
          200: "var(--background-200)",
          300: "var(--background-300)",
          400: "var(--background-400)",
          500: "var(--background-500)",
          600: "var(--background-600)",
          700: "var(--background-700)",
          800: "var(--background-800)",
          900: "var(--background-900)",
          950: "var(--background-950)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
          950: "var(--secondary-950)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          950: "var(--accent-950)",
        },
      },
      animation: {
        border: "background ease infinite",
      },
      keyframes: {
        background: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      lineHeight: {
        prose: "1.8125",
      },
      maxWidth: {
        prose: "768px",
      },
      zIndex: {
        blur: "-1",
        grid: "-2",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),

    // adds a `s-*` utility to apply the same width and height
    // s stands for square
    plugin(function sizePlugin(api) {
      api.matchUtilities(
        { s: (value) => ({ width: value, height: value }) },
        { values: api.theme("width") }
      );
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          "@apply w-full mx-auto max-w-screen-xl px-4 md:px-8": {},
        },

        ".grid-container": {
          display: "grid",
          gridTemplateColumns:
            "1fr min(var(--container-width, 1280px), calc(100% - (2 * var(--container-gutter-size, 24px)))) 1fr",
          gridColumnGap: "var(--container-gutter-size, 24px)",
          overflow: "clip",
          width: "100%",
          rowGap: theme("spacing.24"),
          paddingBottom: theme("spacing.24"),
          "@media screen(md)": {
            rowGap: theme("spacing.32"),
            paddingBottom: theme("spacing.32"),
          },
          "@media screen(lg)": {
            rowGap: theme("spacing.40"),
            paddingBottom: theme("spacing.40"),
          },

          /* center all children by default */
          "& > *": {
            gridColumn: "2",
          },

          /* allows content to bleed edge to edge */
          "& > .bleed-full": {
            gridColumn: "1 / -1",
          },

          /* allows content to bleed to starting edge */
          "& > .bleed-start": {
            gridColumn: "1 / 3",
          },

          /* allows content to bleed to ending edge */
          "& > .bleed-end": {
            gridColumn: "2 / -1",
          },

          "& > .bleed-none": {
            gridColumn: "2 !important",
          },
        },

        ".accordion": {
          "&::-webkit-details-marker": {
            display: "none",
          },
        },

        ".heading-1": {
          "@apply text-5xl leading-tight": {},
          fontWeight: "var(--heading-weight-normal)",
        },

        ".heading-2": {
          "@apply text-4xl leading-tight": {},
          fontWeight: "var(--heading-weight-normal)",
        },

        ".heading-3": {
          "@apply text-2xl leading-tight": {},
          fontWeight: "var(--heading-weight-normal)",
        },

        ".heading-4": {
          "@apply text-xl leading-tight": {},
          fontWeight: "var(--heading-weight-normal)",
        },

        ".heading-5": {
          "@apply text-lg leading-tight": {},
          fontWeight: "var(--heading-weight-normal)",
        },

        ".code": {
          "@apply font-mono font-light": {},
        },

        ".panel": {
          "@apply border border-accent-500 bg-accent-600 shadow-xl": {},
        },
      });
    }),
  ],
};
