/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      ...colors,
      primary: '#6016FC',
      'primary-light': 'rgba(96, 22, 252, 0.1)',
      darkend: '#161629',
      green: '#16FCD2',
      highlight: '#221048',
      light: {
        muted: 'rgba(255, 255, 255, 0.6)',
        ultra: 'rgba(255, 255, 255, 0.05)',
        normal: 'rgba(255, 255, 255, 0.1)',
      },
      dark: '#0B0B22',
      red: '#FC165B',
    },
  },
};
