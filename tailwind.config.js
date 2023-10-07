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
        primary: ['Urbanist', 'sans-serif'],
        secondary: ['Lato', 'sans-serif']
      },
      colors: {
        light: "#EEEFE5",
        dark: "#131315",
        "dark-2": "#333333",
        "neon-pink": "#F800C1",
        "neon-blue": "#04B5E6",
        "neon-green": "#7FD680",
        "neon-yellow": "#E8E454",

      },
    },
  },
  plugins: [],
}

