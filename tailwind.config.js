/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#352D7D",
        primaryHover : "#4E49A2" ,
        mainBlack: "#1f1f1f" ,
        mainRed : "#FF4966" ,
        mainGrey : "#F3F4F6",
        mainLightBlue : "#0ED8B8"
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"]
      },
      keyframes: {
        bgChange: {
          "0%, 100%": {
            backgroundColor: "#352D7D",
          },
          // "35%": { backgroundColor: "#0ED8B8" },
          "65%": { backgroundColor: "#161748" },
        },
      },
      animation: {
        bgChange: "bgChange 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}