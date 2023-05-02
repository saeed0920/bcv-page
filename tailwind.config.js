/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        faq: "1fr 5fr 2rem",
      },
      colors: {
        bcvGreen: "#65e6cf",
        bcvGray: "#cdcfd3",
      },
    },
  },
  plugins: [],
};
