/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050507",
        secondary: "#a1a1aa",
        tertiary: "#0d0d11",
        "black-100": "#131318",
        "black-200": "#08080a",
        "white-100": "#f4f4f5",
        accent: {
          cyan: "#00f0ff",
          mint: "#00f5a0",
          violet: "#a855f7",
          amber: "#f59e0b",
          rose: "#f43f5e",
        },
      },
      boxShadow: {
        card: "0px 20px 80px -15px rgba(0, 0, 0, 0.9)",
        glow: "0 0 30px rgba(255, 255, 255, 0.15)",
        "glow-mint": "0 0 25px rgba(0, 245, 160, 0.25)",
        "glow-cyan": "0 0 25px rgba(0, 240, 255, 0.25)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "none",
      },
    },
  },
  plugins: [],
};
