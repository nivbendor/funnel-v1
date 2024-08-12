/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-dupe-keys
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // eslint-disable-next-line no-dupe-keys
  theme: {
    extend: {
      colors: {
        primary: '#2d5ff1',
      },
    },
  },
  plugins: [],
}
