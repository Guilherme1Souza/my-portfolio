/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        title: "#383838",
        text: "#5D5D5D",
        textSecondary: "#C2B3A3",
        bege: "#D8D1C9",
      },
    },
  },
  plugins: [],
}
