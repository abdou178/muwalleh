import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hydro: {
          950: "#070c1e",
          900: "#0a1128",
          850: "#0d1736",
          800: "#0f172a",
          700: "#1e293b",
          600: "#334155",
          500: "#475569",
          100: "#e2e8f0",
          50: "#f8fafc",
        },
        ultrasonic: {
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#06b6d4",
          600: "#0284c7",
          700: "#0369a1",
        },
        urgency: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        whatsapp: {
          500: "#25D366",
          600: "#20bd5a",
          700: "#128C7E",
          800: "#075E54",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        cairo: ["var(--font-cairo)", "Cairo", "system-ui", "sans-serif"],
      },
      animation: {
        "sonar-pulse": "sonarPulse 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "sonar-ping": "sonarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        sonarPulse: {
          "0%": { transform: "scale(0.95)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "0.3" },
          "100%": { transform: "scale(0.95)", opacity: "0.8" },
        },
        sonarPing: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
