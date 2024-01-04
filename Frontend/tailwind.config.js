/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#6ede8a',
        'shadow': '#6ede8a45',
        'secondary': '#04395e'
      }
    },
  },
  plugins: [],
}

