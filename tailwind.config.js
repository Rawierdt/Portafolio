/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'tv': "url('https://i.makeagif.com/media/4-05-2022/22uZbY.gif')",
      },
    },
  },
  plugins: [],
}
