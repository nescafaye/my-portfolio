/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  lightMode: 'class',
  theme: {
    extend: { 
      fontFamily: {
        primary: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        secondary: ['Urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}

