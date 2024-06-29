/** @type {import('tailwindcss').Config} */
const tailwindUI = require('./packages/ui/tailwind.config.js');
module.exports = {
  content:  [
    './apps/**/*.{js,ts,jsx,tsx,css,scss}',
    './packages/**/*.{js,ts,jsx,tsx,css,scss}', 
  ],
  theme: {
    extend: tailwindUI.theme.extend,
  },
  plugins: [],
}