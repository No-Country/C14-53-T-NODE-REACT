/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      color: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)'
      }
    }
  },
  plugins: []
}
