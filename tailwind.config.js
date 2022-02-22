module.exports = {
  content: ["./src/**/**/*.{ts,tsx,js,jsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'backg': '#F0F2F5',
        'fp'   : '#3E3D45',
        'bp'   : '#202020',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
