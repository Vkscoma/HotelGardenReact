/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#DCBAB5',
        secondary: '#FFE5DE',
        third: '#F2E8E9',
        fourth: '#697798',
        background: '#535C71',
        background2: '#25282a',
        backgroundNav: '#131820',
        buttonColor: '#29ADFF',
        light: '#F2F2F2',
        dark: '#111111',
      },
      fontSize: {
        'h1': '3.5rem',
        'h2': '3rem',
        'h3': '2.75rem',
        'h4': '2.5rem',
        'h5': '2rem',
        'h6': '1.5rem',
        'p': '1.5rem',
      },
    },
  },
  plugins: [],
}

