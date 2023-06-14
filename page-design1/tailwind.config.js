/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sans: ["Source Sans Pro"],
      },
      colors: {
        card_bg: " #407EDB",
      },
    },
  },
  plugins: [],
};
