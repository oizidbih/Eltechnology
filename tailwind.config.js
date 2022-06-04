module.exports = {
  content: [
    "./index.html",
    "./src/**/*{vue,js,ts,jsx,tsx}"  
  ],
  darkMode: false,
  theme: {
    extend: {
      height: {
        '112' : '28rem',
        '128': '32rem',
        '144' : '36rem'
      },
      width: {
        '112' : '28rem',
        '128': '32rem',
        '144' : '36rem'
      },
      colors: {
        
        Light: '#FFFFFF'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
  variants:{
    extend: {},
  }
}
