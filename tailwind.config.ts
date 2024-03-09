import type { Config } from "tailwindcss";

const ABC_THEME = {
  abc: {
    primary: "#ffffff",
    secondary: "#ff0000",
    accent: "#B49249",
    neutral: "#fff3dd",
    "base-100": "#ffffff",
    info: "#00ffff",
    success: "#00ff00",
    warning: "#00ff00",
    error: "#ff0000",
  },
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: ABC_THEME.abc,
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: "1.2",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "retro", "lofi", ABC_THEME],
  },
};

export default config;
