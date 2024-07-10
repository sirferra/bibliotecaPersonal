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
    extend: {
      colors:{
        blackBackground: "#0B0B0F",
        whiteBackground: "#F5FFFE",
        icon_fill_black_static: "#000000",
        icon_fill_blue_static: "#0014FF",
        icon_fill_blue_hover: "#0D1143",
        icon_fill_white_hover: "#FFFFFF",
        layer_1_background: "#1B1C22",
        link_color: "#0082FB",
        redondez: "#20",
        color_1: "#FF2CDF",
        color_2: "#0014FF",
        color_3: '#00D1FF',
        color_4: "#73F6AF",
        color_5: '#ED5F5F',
        color_6: '#008C99',
        color_7: '#71F6B1',
        'violet': {
            '50': '#f3f0ff',
            '100': '#ebe5ff',
            '200': '#d8cdff',
            '300': '#bda6ff',
            '400': '#9f73ff',
            '500': '#833bff',
            '600': '#7814ff',
            '700': '#6c02ff',
            '800': '#5301c6',
            '900': '#4b03af',
            '950': '#2c0077',
        },
      },
      backgroundImage: theme=>({
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        manga: `linear-gradient(to bottom, ${theme('colors.color_1')} 0%, ${theme('colors.color_2')} 100%)`,
        book:  `linear-gradient(to bottom, ${theme('colors.color_2')} 0%, ${theme('colors.color_3')} 100%)`,
        anime: `linear-gradient(to bottom, ${theme('colors.color_3')} 0%, ${theme('colors.color_4')} 100%)`,
        movie: `linear-gradient(to bottom, ${theme('colors.color_4')} 0%, ${theme('colors.color_5')} 100%)`,
        music: `linear-gradient(to bottom, ${theme('colors.color_5')} 0%, ${theme('colors.color_6')} 100%)`,
        all:   `linear-gradient(to bottom, ${theme('colors.color_1')} 0%, ${theme('colors.color_2')} 14%, ${theme('colors.color_3')} 28%, ${theme('colors.color_4')} 42%, ${theme('colors.color_5')} 56%, ${theme('colors.color_6')} 70%, ${theme('colors.color_7')} 84%, ${theme('colors.color_1')} 100%)`
      }),
      height:{
        '700vh': '700vh',
      },
      width:{
        '352': '22rem',
        '368': '23rem',
        '380': '24rem'
      },
      keyframes:{
        'moveBg': {
          '0%,100%': {top: 0},
          '50%': {top: '-600%'},
        }
      },
      animation:{
        'moveBg': 'moveBg 60s linear infinite'
      },
      fontFamily: {
        'title': ['"Julius Sans One"', 'sans-serif'],
        'body': ['"Comfortaa"', 'sans-serif'],
      },
      fontSize: {
        'title': '27px',
        'body': '18px',
      },
    },
  },
  plugins: [],
};