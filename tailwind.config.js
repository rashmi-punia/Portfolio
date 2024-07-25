/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        Pink:"#FFC1CC",
        Lavender: "#E6E6FA",
        Mint: "#E6F7E6",
        Yellow: "#FFF4C1",
        SkyBlue: "#B3E5FC",
        Coral: "#FFB6B6",

        secondaryBg: '#1E1E1E',
        accentBg: '#252525',
        primaryText: '#E0E0E0',
        secondaryText: '#B0B0B0',
        accentText: '#A0A0A0',
      },
      fontFamily:{
         Proff:""
      }
    },
  },
  plugins: [],
}

