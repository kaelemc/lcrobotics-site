module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        solidwhite: '1px solid white',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
