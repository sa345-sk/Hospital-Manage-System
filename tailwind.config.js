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
        'sky-b': '#2093c6',
        'sky-b-h': '#28a8e1',
        'err-bg': '#ffbebe',
        'err-border': '#ec2727'
      },
      margin: {
        'ma': '0 auto'
      },
      borderRadius: {
        'r-5': '5px',
      },
      width: {
        'op': '95%',
        '100': '400px',
        '105': '415px',
        '110': '430px',
        '115': '445px',
        '75': '88%'
      },
      borderColor: {
        'err-border': '#ec2727'
      },
      height: {
        'hv': '100vh'
      },
      fontSize: {
        '1.5': '17px'
      }
    },
  },
  plugins: [],
}