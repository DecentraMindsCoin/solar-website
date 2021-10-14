module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'barriecito': ['barriecito', 'cursive'],
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },

  variants: {
    scrollSnapType: ["responsive"],
  },    extend: {
      backgroundImage: {
        "quote-image": "url('/screenshot-sun-2.png')",
      },
      backgroundVideo: {
        "quote-video": "url('/videos/edited-cactus.mp4')",
      },
    },
  },
  plugins: [
    require("tailwindcss-scroll-snap"),
    require("@tailwindcss/line-clamp"),
  ],
};
