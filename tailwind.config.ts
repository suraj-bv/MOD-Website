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
        brand: {
          primary: "#121A38",
          "primary-dark": "#0D132B",
          accent: "#E9EDF8",
          dark: "#121A38",
          text: "#1A2341",
        },
        sky: {
          50: "#EDF1FB",
          100: "#D8E0F4",
          200: "#B3C1E7",
          300: "#8EA3DA",
          400: "#6884CD",
          500: "#4366C0",
          600: "#314F9F",
          700: "#233C7D",
          800: "#182A57",
          900: "#121A38",
          950: "#0D132B",
        },
        cyan: {
          50: "#EDF1FB",
          100: "#D8E0F4",
          200: "#B3C1E7",
          300: "#8EA3DA",
          400: "#6884CD",
          500: "#4366C0",
          600: "#314F9F",
          700: "#233C7D",
          800: "#182A57",
          900: "#121A38",
          950: "#0D132B",
        },
        blue: {
          50: "#EDF1FB",
          100: "#D8E0F4",
          200: "#B3C1E7",
          300: "#8EA3DA",
          400: "#6884CD",
          500: "#4366C0",
          600: "#314F9F",
          700: "#233C7D",
          800: "#182A57",
          900: "#121A38",
          950: "#0D132B",
        },
        background: "var(--surface)",
        foreground: "var(--text)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
