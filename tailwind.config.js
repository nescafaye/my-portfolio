/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: { 
      fontFamily: {
        primary: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        secondary: ['Urbanist', 'sans-serif']
      },
      colors: {
        "dark-60": "#020211",
        "dark-30": "#FF00C7",
        "dark-10": "#D9D9D9",
        "accent-color-1": "#00FF19",
        "accent-color-2": "#00D1FF"
      }
    },
  },
  plugins: [],
}

