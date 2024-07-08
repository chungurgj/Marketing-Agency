/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#2D3748',
        secondary:'#CBD5E0',
        accent:'#FFC0CB',
        peach:'#FFE4B5',
        mint:'#98FB98',
        lavander: '#E6E6FA',
        coral:'#F08080'
      },
      fontFamily:{
        poppins:['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

