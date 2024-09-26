/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.js', 
  ],
  theme: {
    extend: {
      colors:{
        'bg-dark' : '#f2f2f2',
        'text-head' : '#1f1f1f',
        'text-blue' : '#00a3e0'
      },
    },
  },
  plugins: [],
};
