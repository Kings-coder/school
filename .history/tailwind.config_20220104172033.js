module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily:{
      body:["Montserrat", ]
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
