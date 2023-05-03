/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        tab: { max: "900px" },
        phone: { max: "600px" },
        // => @media (min-width: 1280px) { ... }
      },
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
