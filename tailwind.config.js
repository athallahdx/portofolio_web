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
      colors: {
        'footer-color': '#0F1835',
      },
      screens: {
        'msm' : '320',
        'mmed': '375px',
        'mlg': '400px',
        'mdp': '790px',
        'lg': '1020px',
      },
      boxShadow: {
        'top-xs': '0 -1px 2px 0 rgb(0 0 0 / 0.05)',
        'top-sm': '0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)',
        'top-md': '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)',
        'top-lg': '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)',
        'top-xl': '0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1)',
        'top-2xl': '0 -25px 50px -12px rgb(0 0 0 / 0.25)',
        'all-sides-sm': '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.1), 2px 0 4px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.1)',
        'all-sides-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 4px 0 6px -1px rgba(0, 0, 0, 0.1), -4px 0 6px -1px rgba(0, 0, 0, 0.1)',
        'all-sides-lg': '0 6px 8px -1px rgba(0, 0, 0, 0.1), 0 -6px 8px -1px rgba(0, 0, 0, 0.1), 6px 0 8px -1px rgba(0, 0, 0, 0.1), -6px 0 8px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
