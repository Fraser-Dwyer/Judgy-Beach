/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "1280px",
    },
    fontSize: {
      sm: "2vw",
      smPC: "10px",
      md: "3vw",
      mdPC: "15px",
      lg: "4vw",
      lgPC: "20px",
      xl: "5vw",
      xlPC: "25px",
      xxl: "6vw",
      xxlPC: "30px",
      xxxl: "8vw",
      xxxlPC: "35px",
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
      boxShadow: {
        // horizontal offset, vertical offset, blur, spread, colour
        "3xl": "0 35px 60px 5px rgba(0, 0, 0, 1)",
        top: "0px -15px 40px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
