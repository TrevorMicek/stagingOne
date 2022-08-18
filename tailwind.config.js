module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      fontFamily: {
        default: ["'Work Sans', sans-serif"],
      },
        colors: {
          'default': 'rgb(99 102 241)',
          'bg': 'rgb(10 20 30)',
          'blue': 'rgb(14 165 233)',
          'purple': 'rgba(130,103,165,255)',
          'dark': 'rgba(19,7,30,255)'
    },
    fontSize: {
      'xxs': '10px'
    },
    backgroundImage: {
      'contact': 'url("../images/6_ContactMe/PNG/Background_1.png")',
      'default': 'url("../images/header2/header.png")',
      'about': 'url("../images/newImg/Assets (1)/3_Aboutme/Background.png")'
  }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
       require('@tailwindcss/aspect-ratio'),
       require('@tailwindcss/typography'),
       require('@tailwindcss/forms'),
],
}
