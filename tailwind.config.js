/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FFAA38",
        primaryHover : "#FFC577" ,
        mainBlack: "#1f1f1f" ,
        mainRed : "#FFC577" ,
        mainGrey : "#FFF2DF",
        mainLightBlue : "#0ED8B8"
      },
      fontFamily: {
        'baloo2': ['Baloo 2', 'sans-serif'],
      },
      keyframes: {
        bgChange: {
          "0%, 100%": {
            backgroundColor: "#FFC577",
          },
          // "35%": { backgroundColor: "#0ED8B8" },
          "65%": { backgroundColor: "#FFC577" },
        },
      },
      animation: {
        bgChange: "bgChange 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}