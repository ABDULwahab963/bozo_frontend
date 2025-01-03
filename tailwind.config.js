/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#D61239",
        primary_text: "#131313",
        sec_text: "#787878",
        light_bg: "#F5F5F5",
        bg: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
