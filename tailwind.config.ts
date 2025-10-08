/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
    purge: ["./components/**/*.{ts,js,tsx}", "./app/**/*.{ts,js,tsx,jsx}"],
    typescript: {
        ignoreBuildErrors: true
    },
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
