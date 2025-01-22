/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: "#4C1D95", // Deep purple
          800: "#5B21B6", // Slightly lighter purple
        },
        gold: {
          300: "#FCD34D", // Light gold
          400: "#FBBF24", // Bold gold
        },
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          from: { opacity: "1", transform: "translateY(0)" },
          to: { opacity: "0", transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        fadeOut: "fadeOut 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
// keyframes: {
//           fadeIn: {
//             from: { opacity: 0 },
//             to: { opacity: 1 },
//           },
//           fadeOut: {
//             from: { opacity: 1 },
//             to: { opacity: 0 },
//           },
//         },
//         animation: {
//           fadeIn: "fadeIn 1s ease-in-out forwards",
//           fadeOut: "fadeOut 1s ease-in-out 3s forwards",
//         },