/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
       "./pages/**/*.{js,jsx,ts,tsx}",
       "./pages/_components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins:[
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.hideOptions': {
          opacity:0,
        },
        '.showOptions': {
          opacity:1,
        }
      })
    }),
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 2s ease-in-out"
      },
      keyframes: () => ({
          fadeIn: {
            "0%": { opacity: 0,transform: "translate3d(0, 5%, 0)" },
            "100%": { opacity: 1, transform: "translate3d(0, 0, 0)"}
          }
      })
    },
    screens :{
      'sm' : '640px',
      'md' : '768px' , 
      'lg': '1024px',
      'xl' : '1280px',
      'larger': '2000px'
    }  
  }
}

