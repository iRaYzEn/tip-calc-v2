/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        strCyan: "hsl(172, 67%, 45%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        veryDarkCyan: "hsl(183, 100%, 15%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        veryLIghtGrayishCyan: "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        main: "'Space Mono', monospace",
      },
      fontWeight: {
        bold: "700",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
