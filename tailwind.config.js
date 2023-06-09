/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans - serif'],
        climate: ['Climate Crisis', 'cursive']
      },
      backgroundImage: {
        'bgpattern': "url('../Assets/bgpattern.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}