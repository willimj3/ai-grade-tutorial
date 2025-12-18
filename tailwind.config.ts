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
        background: "var(--background)",
        foreground: "var(--foreground)",
        lime: {
          DEFAULT: "#d0f289",
          dark: "#b8dc6a",
          light: "#edfedc",
        },
        sage: "#a1c699",
        tan: {
          DEFAULT: "#c4b5a9",
          dark: "#967868",
          light: "#d9cfc6",
        },
        cream: "#f5f4f0",
        "warm-white": "#faf9f7",
        accent: {
          orange: "#e68846",
        },
        neutral: {
          50: "#fbfbf9",
          100: "#f0eeea",
          200: "#e5e3dd",
          300: "#d4d1c9",
          400: "#a8a49c",
          500: "#7a7670",
          600: "#5a5753",
          700: "#3d3b38",
          800: "#2d2d2d",
          900: "#1a1918",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
};
export default config;
