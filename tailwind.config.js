const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'serif': ['Noto Serif', 'Times', 'Times New Roman']
    },
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.stone
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
