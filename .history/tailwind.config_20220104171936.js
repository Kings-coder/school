module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFam
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
