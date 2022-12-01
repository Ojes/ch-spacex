const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    fontFamily: {
      default: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        surface: '#2C2C2e',
        black: '#121212',
        white: 'rgba(255,255,255,.87)',
        gray: {
          1: 'rgba(255,255,255,.77)',
          2: 'rgba(255,255,255,.57)',
          3: 'rgba(255,255,255,.47)',
          4: 'rgba(255,255,255,.37)',
          5: 'rgba(255,255,255,.27)',
        },
        dp: {
          1: 'rgba(255,255,255,.05)',
          2: 'rgba(255,255,255,.07)',
          3: 'rgba(255,255,255,.11)',
          4: 'rgba(255,255,255,.22)',
          5: 'rgba(255,255,255,.24)',
        },
      },
    },
  },
  plugins: [],
};
