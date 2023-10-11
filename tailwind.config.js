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
        light: "#FFFEF5",
        dark: "#131315",
        "dark-2": "#333333",
        "neon-pink": "#F800C1",
        "neon-blue": "#0075FF",
        "neon-green": "#A6FF00",
        "neon-yellow": "#F6FF01",

      },
    },
  },
  plugins: [],
}

