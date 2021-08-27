module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
       },
       backgroundImage: theme => ({
        'hero': "url('./media/images/hero.jpg')",
       }),
      outline: {
        solidwhite: '1px solid white',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
