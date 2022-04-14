module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily:{
      body:["Monts"]
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
