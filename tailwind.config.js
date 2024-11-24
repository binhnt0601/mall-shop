/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        fadeInScaleUp: 'fadeInScaleUp 1s ease-out',
      },
      keyframes: {
        fadeInScaleUp: {
          from: { opacity: '0', transform: 'scale(0.3)' },
          to: { opacity: '1', transform: 'scale(1.0)' },
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
  plugins: [],
}
