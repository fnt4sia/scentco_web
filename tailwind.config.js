/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '108': '28rem',
        '128': '32rem',
        '140': '36rem',
        '160': '40rem',
        '170': '50rem',
      }
    },
  },
  plugins: [],
}

