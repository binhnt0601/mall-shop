import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "border-fade": {
          "0%": {
            borderColor: "transparent",
            boxShadow: "0 0 0 0 rgba(79, 70, 229, 0)",
          },
          "50%": {
            borderColor: "transparent",
            boxShadow: "0 0 10px 2px rgba(79, 70, 229, 0.3)",
          },
          "100%": {
            borderColor: "#4f46e5", // indigo-600
            boxShadow: "0 0 15px 4px rgba(79, 70, 229, 0.7)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "border-fade": "border-fade 1s ease forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "app-green": "#1ED760",
      },
      height: {
        "cal-height-lt": "calc(100vh - 351px)",
        "cal-height-mb": "calc(100vh - 223px)",
      },
    },
  },
  plugins: ["mtConfig"],
});
