import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  engine: {
    compile: false,
  },
  theme: {
    extend: {
      screens: {
        'desktop': '1440px',
        'mobile': {'max': '375px'}
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      }
    },
  },
  plugins: [],
};

export default config;