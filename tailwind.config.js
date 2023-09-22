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
        primary: ['Space Mono', 'serif'],
        secondary: ['Urbanist', 'sans-serif']
      },
      colors: {
        light: "#EFFBFF",
        dark: "#1B1B1E",
        "neon-pink": "#F800C1",
        "neon-blue": "#04B5E6",
        "neon-yellow": "#7FD680",
        "neon-green": "#E8E454",

      },
    },
  },
  plugins: [],
}

