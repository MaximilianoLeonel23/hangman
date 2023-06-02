/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#C08787",
        dark: "#28282A",
        light: "#FEFEFE",
        correct: "#8DE3A5",
        incorrect: "#666666",
      },
    },
  },
  plugins: [],
};
