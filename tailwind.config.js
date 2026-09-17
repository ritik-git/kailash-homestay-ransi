/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F1E8",
        parchment: "#ECE5D6",
        pine: { DEFAULT: "#1E3A2F", deep: "#132720", soft: "#2F5243" },
        charcoal: "#23272B",
        stone: "#7C7F78",
        earth: "#6E4F37",
        brass: { DEFAULT: "#B89560", light: "#D9C29A" },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", '"Times New Roman"', "serif"],
        sans: ["Manrope", "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "sans-serif"],
      },
      maxWidth: { prose: "34rem" },
      transitionTimingFunction: { calm: "cubic-bezier(.22,.61,.36,1)" },
    },
  },
  plugins: [],
};
