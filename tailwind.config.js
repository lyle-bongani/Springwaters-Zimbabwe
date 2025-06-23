/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2196F3', // Blue
        'black-grey': '#222831', // Black-Grey
        white: '#FFFFFF', // White
      },
    },
  },
  plugins: [],
}