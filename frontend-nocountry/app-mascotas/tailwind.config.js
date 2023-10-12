/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#2CA25F',
      secondary: '#EDE6E7'
    },
    boxShadow: {
      custom: '0 5.5px 1.85px 0 rgba(0, 0, 0, 0.25)'
    },
    fontFamily: {
      sans: ['"Open Sans"', '"sans-serif"'],
      serif: ['"Sansita"', '"Serif"']
    }
  },
  plugins: []
}
