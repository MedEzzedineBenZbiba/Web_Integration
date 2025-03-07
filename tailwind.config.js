/** @type {import('tailwindcss').Config} */

export default {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        navSize:"24px",
        heroSize: "74px",
        pSize:"18px",}
,
      backgroundImage: {
        'backgroundImg': "url('images/background.png')"
      },

      fontFamily: {
        'Montserrat': ["Montserrat", ],
        body: ["Work Sans"]
      },
      colors: {
        primary: "#1A2779",
        secondary: "#1E40AF",
        ternary_call_to_action : "#1A2779",
        accent: '#F9C74F',
      background: '#F1FAEE',
      text: '#1D3557',
        rose: {
          50: "#FFF1F2",
        },
      },
    },
  },
  plugins: [],
};
