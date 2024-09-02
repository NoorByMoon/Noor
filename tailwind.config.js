
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // heroBg: "url('/src/assets/heroBg.svg')",\
        // GetInTouch:"url('/src/assets/getintouch.png')",
        getintouch: "url('/src/assets/getInTouch.png')",
        waitList:"url('/src/assets/waitList.png')",
      },
    },
  },
  plugins: [],
};
