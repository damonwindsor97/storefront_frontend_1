/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {

    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', ],
      serif: ['ui-serif', 'Georgia', ],
      mono: ['ui-monospace', 'SFMono-Regular', ],
      body: ['General San', 'sans-serif', ],
      inter: ['Inter']
      },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        accent: '#222222',
        mainText: '#fff',
        secondaryText: '#979797',
        cardBG: '#0f0f0f',
        lightBG: '#1c1c1c'
      },
      borderRadius: {
        xl: '25px'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}