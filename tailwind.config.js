module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Cores de texto dinâmicas
        text: {
          DEFAULT: "#1f1f1f", // texto padrão no modo claro
          secondary: "#2d2d2d", // texto secundário no modo claro
        },
        "text-dark": {
          DEFAULT: "#ffffff", // texto padrão no modo escuro
          secondary: "#fafafa", // texto secundário no modo escuro
        },
        // Cores principais
        primary: "#4060dd",
        secondary: "#273e9c",
        // Cores de fundo glass
        glass: {
          light: "rgba(255, 255, 255, 0.7)",
          dark: "rgba(11, 13, 32, 0.5)",
        },
        // Cores de fundo
        bg: {
          light: "#e8e6f5",
          dark: "#1e1e1e",
        },
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
