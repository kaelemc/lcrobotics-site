module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
       },
       colors: {
         's-green' : '#05c42b',
         's-gray' : '#111',
         's-gray-2' : '#1a1a1a',
         's-black' : '#000',
      },
       backgroundImage: theme => ({
        'hero': "url('./media/images/hero.jpg')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
