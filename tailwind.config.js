/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // igual ao pen: scaleX abre, troca origin no meio, fecha
        sweep: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left center" },
          "50%": { transform: "scaleX(1)", transformOrigin: "left center" },
          "50.5%": { transform: "scaleX(1)", transformOrigin: "right center" },
          "100%": { transform: "scaleX(0)", transformOrigin: "right center" },
        },
      },
      animation: {
        sweep: "sweep 0.4s linear forwards",
      },
      colors: {
        title: "#383838",
        text: "#5D5D5D",
        textSecondary: "#C2B3A3",
        bege: "#D8D1C9",
      },
    },
  },
  plugins: [],
};
