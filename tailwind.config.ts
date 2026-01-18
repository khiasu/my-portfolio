import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark base with one accent color
        accent: {
          DEFAULT: "rgb(100 200 255)",
          light: "rgb(150 220 255)",
          dark: "rgb(50 150 220)",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        glass: "24px",
      },
      animation: {
        // Physical motion presets
        "inertia-scroll": "inertia-scroll 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        "morph-transition": "morph-transition 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "press-compress": "press-compress 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
        "release-glow": "release-glow 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "inertia-scroll": {
          "0%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(0.98)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        "morph-transition": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(0.95)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "press-compress": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.96)" },
        },
        "release-glow": {
          "0%": { boxShadow: "0 0 0 0 rgba(var(--color-accent), 0)" },
          "50%": { boxShadow: "0 0 20px 8px rgba(var(--color-accent), 0.3)" },
          "100%": { boxShadow: "0 0 0 0 rgba(var(--color-accent), 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
