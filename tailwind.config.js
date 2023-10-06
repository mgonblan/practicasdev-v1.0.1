module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_e5: "#ffffffe5",
          A700_00: "#ffffff00",
          A700: "#ffffff",
        },
        teal: { A700: "#13c1ac" },
        gray: {
          100: "#f4f4f4",
          400: "#c6c6c6",
          500: "#a8a8a8",
          900: "#212529",
          "900_01": "#161616",
        },
        blue_gray: {
          300: "#90a4ae",
          400: "#8d8d8d",
          500: "#607d8b",
          700: "#525252",
          900: "#253238",
          "900_01": "#29363d",
        },
        blue: { 50: "#edf5ff", A700: "#0f62fe" },
        orange: { 500: "#f49709" },
        black: { 900: "#000000" },
        deep_orange: { 900: "#803700" },
        indigo: { A400: "#385ef9" },
      },
      fontFamily: { ibmplexsans: "IBM Plex Sans", inter: "Inter" },
      backgroundImage: {
        gradient:
          "linear-gradient(270deg ,#ffffff00,#ffffff7f,#ffffffe5,#ffffff)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
