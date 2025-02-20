/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "Poppins"
      },
      backgroundImage: {
        'auth': "url('../src/assets/hideout.svg')"
      }
    },
  },
  plugins: [],
}

