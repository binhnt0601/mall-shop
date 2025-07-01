const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
      },
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'app-green': '#1ED760',
      },
      height: {
        'cal-height-lt': 'calc(100vh - 351px)',
        'cal-height-mb': 'calc(100vh - 223px)',
      },
    },
  },
  plugins: ['mtConfig'],
})
