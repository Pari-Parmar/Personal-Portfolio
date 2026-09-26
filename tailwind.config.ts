import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070f",
        foreground: "#f3f4f6",
        surface: {
          50: "#0b0f19",
          100: "#111726",
          200: "#1a2236",
          300: "#242f49",
        },
        brand: {
          cyan: "#00f5d4",
          purple: "#7b2cbf",
          indigo: "#6366f1",
          pink: "#f72585",
          blue: "#3a86ff",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 8s ease-in-out infinite alternate",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.35", filter: "blur(40px)" },
          "100%": { opacity: "0.75", filter: "blur(65px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(99, 102, 241, 0.35)",
        "glow-cyan": "0 0 35px -5px rgba(0, 245, 212, 0.25)",
        "glow-purple": "0 0 35px -5px rgba(123, 44, 191, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
