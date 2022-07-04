const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    'content/**/*.{md,yml,json,json5,csv}'
  ],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.stone
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
