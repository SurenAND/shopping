/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7AA2E3",
        secondary: "#97E7E1",
        btn: "#6AD4DD",
        background: "#F8F6E3",
      },
    },
  },
  plugins: [],
};
