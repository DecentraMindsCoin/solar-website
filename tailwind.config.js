module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    scrollSnapType: ['responsive']
  },
  plugins:  [require('tailwindcss-scroll-snap'),
  require('@tailwindcss/line-clamp')]
};
