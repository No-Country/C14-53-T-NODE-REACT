/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#2CA25F',
      secondary: '#EDE6E7'
    },
    fontFamily: {
      sans: ['"Open Sans"', '"sans-serif"'],
      serif: ['"Sansita"', '"Serif"']
    }
  },
  plugins: []
}
