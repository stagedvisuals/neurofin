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
        nero: {
          950: "#000000",
          900: "#050505",
          850: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#222222",
          500: "#333333",
        },
        accent: {
          white: "#ffffff",
          silver: "#c0c0c0",
          smoke: "#888888",
          dim: "#555555",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"IBM Plex Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-up-delay-1": "fadeUp 0.8s ease 0.1s forwards",
        "fade-up-delay-2": "fadeUp 0.8s ease 0.2s forwards",
        "fade-up-delay-3": "fadeUp 0.8s ease 0.3s forwards",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "grain": "grain 0.5s steps(1) infinite",
        "marquee": "marquee 30s linear infinite",
        "glow-line": "glowLine 3s ease-in-out infinite",
        "counter-spin": "counterSpin 20s linear infinite",
        "orbit": "orbit 15s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "20%": { transform: "translate(-15%,5%)" },
          "30%": { transform: "translate(7%,-25%)" },
          "40%": { transform: "translate(-5%,25%)" },
          "50%": { transform: "translate(-15%,10%)" },
          "60%": { transform: "translate(15%,0%)" },
          "70%": { transform: "translate(0%,15%)" },
          "80%": { transform: "translate(3%,35%)" },
          "90%": { transform: "translate(-10%,10%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glowLine: {
          "0%": { left: "-30%", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { left: "130%", opacity: "0" },
        },
        counterSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;