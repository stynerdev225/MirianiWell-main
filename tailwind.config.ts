import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cinzel-decorative": ["var(--font-cinzel-decorative)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "#E8F4FD",
          200: "#D1E9FB",
          300: "#A3D3F7",
          400: "#75BDF3",
          500: "#47A7EF",
          600: "#1991EB",
          700: "#1574BC",
          800: "#11578D",
          900: "#0D3A5E",
        },
        light: {
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#E2E8F0",
        },
        dark: {
          100: "#334155",
          200: "#1E293B",
          300: "#0F172A",
        },
        success: {
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
