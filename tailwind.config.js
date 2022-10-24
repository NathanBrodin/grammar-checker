/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Satoshi", "sans-serif"],
        "italic": ["Satoshi-Italic", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
