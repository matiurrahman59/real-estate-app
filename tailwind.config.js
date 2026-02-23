/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  // content: ['./app/**/*.{js,jsx,ts,tsx}'],
  // content: ['./App.tsx', './components/**/*.{js,jsx,ts,tsx}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#8BC83F',
        secondary: '#234F68',
        defaultColor: '#252B5C',
        bodyText: '#53587A',

        // 'gray--1': '#204D6C',
        // 'dark--1': '#292929',

        'gray--1': '#DFDFDF',
        'gray--2': '#cccccc',
        'gray--3': '#F5F4F8',
        'gray--4': '#A1A5C1',

        yellow: '#FFC42D',
      },
      fontFamily: {
        lato: ['Lato_400Regular'],
        raleway: ['Raleway_400Regular'],
        montserrat: ['Montserrat_400Regular'],
      },
    },
  },
  plugins: [],
}
