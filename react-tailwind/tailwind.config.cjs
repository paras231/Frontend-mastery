/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bluetext:"#006CE0",
        cancellation:"#BDFFBC",
        cancelborder:"#0A8607"
      }
    },
  },
  plugins: [],
}