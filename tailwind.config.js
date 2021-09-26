module.exports = {
  purge: ['./src/**/*.js'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  important: false,
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a434d',
        'light-bg': ' #a3c5d2',
        pop: '#d47b29',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
