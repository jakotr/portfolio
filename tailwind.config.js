/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6e07f3', //violet
        secondary: '#2a6df8', //blue
        darkColor: '#18181b', //zinc-900
        grayText: '#71717a', //zinc-500
        lightColor: '#f8fafc', //stone-50
      },

    },
    container: {
      padding: {
        DEFAULT: '1rem',
        md:'3rem'
      },
    },
  },
  plugins: [],
}