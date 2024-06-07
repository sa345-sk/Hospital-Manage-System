/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#fafafa',
        'bg-white-20': '#cbd5e1',
        'div-h': 'rgba(203, 213, 225, 0.2)',
        'light-grey': '#c3c3c3',
      },
      margin: {
        'ma': '0 auto'
      },
      borderRadius: {
        'r-5': '5px',
      },
      width: {
        'op': '95%'
      }
    },
  },
  plugins: [],
}