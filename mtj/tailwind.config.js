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
        "secondary-400": "#ffd700",
        "secondary-500": "#ffffe0",
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[800],
          ["dark-hover"]: colors.neutral[900]
        }
      },
      backgroundImage: (theme) => ({
        "gradient-dark":
          "linear-gradient(90deg, rgba(0,10,31,1) 0%, rgba(0,9,28,1) 31%, rgba(0,21,47,1) 100%);",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
