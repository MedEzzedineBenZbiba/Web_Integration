/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundImg': "url('images/background.png')"
      },

      fontFamily: {
        'Montserrat': ["Montserrat", ],
      },
      colors: {
        primary: "#1A2779",
        secondary: "#1E40AF",
        ternary_call_to_action : "#1A2779",
        rose: {
          50: "#FFF1F2",
        },
      },
    },
  },
  plugins: [],
};
