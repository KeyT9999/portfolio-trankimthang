import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "var(--paper)",
          warm: "var(--paper-warm)",
          aged: "var(--paper-aged)",
          shadow: "var(--paper-shadow)",
          border: "var(--paper-border)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          faded: "var(--ink-faded)",
          muted: "var(--ink-muted)",
        },
        accent: {
          red: "var(--accent-red)",
          "red-dark": "var(--accent-red-dark)",
          gold: "var(--accent-gold)",
        },
        rule: {
          DEFAULT: "var(--rule)",
          medium: "var(--rule-medium)",
          light: "var(--rule-light)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        page: "var(--page-max-width)",
      },
      fontSize: {
        masthead: "var(--text-masthead)",
        "display-xl": "var(--text-display-xl)",
        "display-lg": "var(--text-display-lg)",
        headline: "var(--text-headline)",
        subdeck: "var(--text-subdeck)",
        "body-lg": "var(--text-body-lg)",
        body: "var(--text-body)",
        caption: "var(--text-caption)",
        meta: "var(--text-meta)",
        micro: "var(--text-micro)",
      },
    },
  },
  plugins: [],
};

export default config;
