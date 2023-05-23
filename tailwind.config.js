/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'orange': '#F5A623',
      'ash': '#F4F4F4',
      'ashforsignup':'#646464'
    },
    fontFamily:{
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}