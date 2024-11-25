// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  safelist: [
    'md:translate-y-12', 
  ],// Update the content path as per your project
  theme: {
    extend: {
      fontFamily: {
        borel: ['"Borel"', 'cursive' , '"Poppins"'], // Define the font family
      },
    },
  },
  plugins: [],
};
