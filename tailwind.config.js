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
        primary: '#252B5C',
        secondary: '#53587A',
        tertiary: '#234F68',
        placeholder: '#A1A5C1',
        green: '#8BC83F',
        yellow: '#FFC42D',
        gray: '#F5F4F8',
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
