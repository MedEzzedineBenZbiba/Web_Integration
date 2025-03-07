/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],
  theme: {
    extend: {
      colors:{
        primary:"red"
      },
      fontFamily:{
        body:["works sans"]
      },
      fontSize:{
        navSize:"24px"
      }
    },
  },
  plugins: [],
}

