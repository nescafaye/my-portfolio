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
        "dark-60": "#1B1B1E",
        "dark-30": "#F392CE",
        "dark-10": "#D9D9D9",
        "accent-color-1": "#04B5E6",
        "accent-color-2": "#7FD680",
        "accent-color-3": "#E8E454"
      }
    },
  },
  plugins: [],
}

