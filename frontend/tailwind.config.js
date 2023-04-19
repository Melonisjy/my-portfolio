/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Oswald", "sans-serif"],
        display: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
