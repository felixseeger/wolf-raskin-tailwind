/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        'body': '#ffffff',
        'selected-text': 'silver',
        'theme': 'black',
        'nav': '#999999',
        'secondary': '#999999',
        'badge': '#999999',
        'input-border': 'silver',
        'input': '#ffffff'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
