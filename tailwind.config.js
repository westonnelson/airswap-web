const colors = require("tailwindcss/colors");
module.exports = {
  // Tree-shake (remove) unused tailwind classes in production build
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // See also DarkModeSwitch.tsx
  darkMode: "class",
  theme: {
    extend: {},
    fontSize: {
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.375rem", "1.5rem"],
      xl: ["1.25rem", "2rem"],
      "2xl": ["1.5rem", "2rem"],
      h1: ["2.25rem", "2.7rem"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // AirSwap
      primary: {
        50: "#eaf1ff",
        100: "#d5e3ff",
        200: "#aac7ff",
        300: "#80aaff",
        400: "#558eff",
        500: "#2b72ff",
        DEFAULT: "#2b72ff", // AirSwap blue
        600: "#225bcc",
        700: "#1a4499",
        800: "#112e66",
        900: "#091733",
      },
      secondaryBlue: "#0f5fff",
      black: "#111215",
      darkBlack: "#060607",
      ghostBorder: "#343434",
      white: colors.white,
      offwhite: "#c4c4c4",
      gray: colors.trueGray,
      darkGray: "#404040",
      indigo: colors.indigo,
      red: colors.rose,
      green: colors.green,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
