/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
          cursive: ["Pacifico", "Sriracha", "cursive"],
          cursive2: ["Sriracha", "cursive"],
        },
        colors: {
          primary: "#F4EDCC",
          secondary: "#496989",
          brandDark: "#58A399",
          dark: "#1e1e1e",
          light: "#90D26D",
        },
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem",
            sm: "3rem",
          },
        },
        animation: {
          "spin-slow": "spin 40s linear infinite",
        },
      },
    },
  plugins: [],
}