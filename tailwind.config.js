/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0c0d10",
        bg2: "#101216",
        fg: "#edeef0",
        muted: "#9aa1ac",
        line: "rgba(255,255,255,0.09)",
        accent: "#f0b429",
        "accent-dim": "rgba(240,180,41,0.14)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(74,222,128,.45)" },
          "70%": { boxShadow: "0 0 0 8px rgba(74,222,128,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(74,222,128,0)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s infinite",
      },
    },
  },
  plugins: [],
};
