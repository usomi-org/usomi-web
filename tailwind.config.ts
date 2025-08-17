/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue':  '#0057B7',  // example Usomi blue
        'brand-yellow': '#F9A602', // example Usomi yellow
        'brand-green': '#2C8A3E',  // example Usomi green
      },
      fontFamily:{
        sans: ["var(--font-jetbrains)", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};
