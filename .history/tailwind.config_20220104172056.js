module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily:{
      body:["Montserrat", "san-"]
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
