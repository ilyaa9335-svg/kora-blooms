import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mint-bg": "#F5FAF8",
        mint: "#8BBCAA",
        "mint-light": "#D4E8DF",
        dark: "#2A3530",
        blush: "#F2D9D5",
        rose: "#C4929A",
        stone: "#6B7E6A",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 14px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 28px rgba(0,0,0,0.12)",
        float: "0 4px 20px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        DEFAULT: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
