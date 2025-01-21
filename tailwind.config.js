/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top right, #182655 60%, #1F3B8A )',
      },
    },
  },
  plugins: [],
}
