/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        myMd: 'clamp(0.75rem, 2vw, 1rem)',
        myLg: 'clamp(3rem, 8vw, 8rem)',
        myXl: 'clamp(4rem, 10vw, 12rem)',
      },
      lineHeight: {
        myXL: 'clamp(3rem, 8vw, 8.5rem)',
      },
      padding: {
        myTop: '20vh',
        myLeft: '6vw',
        myWidth: 'max(4vw, 1.5rem)',
        myMain: 'min(4vw, 1.5rem)',
      },
      spacing: {
        myMain: 'min(4vw, 1.5rem)',
        myXl: 'calc(min(4vw, 1.5rem * 4))',
        myMax: 'max(12vw, 10rem)',
      },
    },
  },
  plugins: [],
}
