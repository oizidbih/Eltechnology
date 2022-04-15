module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
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
    }
},
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}
