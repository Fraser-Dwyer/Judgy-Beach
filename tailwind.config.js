/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "900px",
    },
    extend: {
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        primary: "rgba(var(--but-primary))",
        butPrimary: "rgba(var(--but-primary))",
        butSecondary: "rgba(var(--but-secondary))",
        butText: "rgba(var(--but-text))",
        butHover: "rgba(var(--but-hover))",
      },
    },
  },
  plugins: [],
};
