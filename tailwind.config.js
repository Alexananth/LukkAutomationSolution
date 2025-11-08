/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'milky-white': '#FFFFFF',
        'milky-white-alt': '#E2DBCF',
        'primary-accent': '#75C4C4',
        'secondary-accent': '#B0FCFE',
        'soft-highlight': '#FFE5CD',
        'text-color': '#333333',
        'hover-effect': '#E2FDFE',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
      borderRadius: {
        'large': '12px',
      }
    },
  },
  plugins: [],
}
