/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#2CA25F',
      secondary: '#EDE6E7',
      beige: '#f5f3e9',
      gray: '#d1d5db',
      red: '#dc2626',
      transparent: 'transparent',
      isabeline: '#F6F3E9'
    },
    boxShadow: {
      custom: '0 5.5px 1.85px 0 rgba(0, 0, 0, 0.25)',
      '3xl': '0 0 25px 0 rgba(0, 0, 0, 0.25)'
    },
    fontFamily: {
      sans: ['"Open Sans"', '"sans-serif"'],
      serif: ['"Sansita"', '"Serif"'],
      montserrat: ['"Montserrat"', '"serif"']
    }
  },
  plugins: []
}
