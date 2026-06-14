import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080d14",
        accent: "#3ecfff",
        "text-primary": "#f0f0ee",
        muted: "#68778a",
      },
      fontFamily: {
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
