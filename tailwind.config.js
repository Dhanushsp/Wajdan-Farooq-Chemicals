/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        protestGuerrilla: ["Protest Guerrilla", "sans-serif"],
        playpenSans: ["Playpen Sans", "cursive"]
      }
    },
  },
  plugins: [],
}

