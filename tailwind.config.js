/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      dropShadow: {
        xl: '0 15px 15px rgba(250, 245, 245,0.25)',
      },
    },
    plugins: [],
  },
};
