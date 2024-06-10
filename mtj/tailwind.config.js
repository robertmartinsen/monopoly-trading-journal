const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#001540",
        "primary-200": "#001c57",
        "primary-300": "#00316e",
        "primary-400": "#00224b",
        "primary-500": "#001b3a",
        "secondary-100": "#ffd700",
        "secondary-200": "#ffffe0",
        "secondary-300": "#DAA520",
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[800],
          ["dark-hover"]: "#001c57",
          ["light-hover"]: "#ffd700",
        },
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "0px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
    },
  },
  plugins: [],
};
