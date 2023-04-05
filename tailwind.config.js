/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22A39F', 
        secondary: '#5D3891',
        orange: '#FF6E31',
        bgDark: '#18181b', //zinc-900
        grayText: '#71717a', //zinc-500
        textColor: '#F3EFE0',
        test: 'bg-slate-800',
      },

    },
    container: {
      padding: '1rem'
    },
  },
  plugins: [],
  darkMode: 'class',
}