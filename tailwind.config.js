/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        bounceCustom: 'bounce 1.5s infinite ease-in-out',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        helvetica: ['Helvetica', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top right, #182655 60%, #1F3B8A )',
      },
      screens: {
        'xs': '400px',
      },
    },
  },
  plugins: [],
}
