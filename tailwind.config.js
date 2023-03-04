/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        lightblack: '#4D4244',
        lightred: '#FF0D38',
        lightredtransp: '#FF0D38ee',
        darkred: '#D70026',
        lightgray: '#747474',
        midgray: '#454545',
        darkgray: '#272727'
      },
      boxShadow: {
        customred: '0px 0px 30px rgba(255, 13, 56, 0.21);'
      }
    },
  },
  plugins: [],
};
