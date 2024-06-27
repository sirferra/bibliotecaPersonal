const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,css,scss}'), // Asegúrate de incluir 'css' y 'scss' aquí
    ...createGlobPatternsForDependencies(__dirname),
    './src/**/*.{js,jsx,ts,tsx,css,scss}', // Asegúrate de incluir 'css' y 'scss' aquí
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};