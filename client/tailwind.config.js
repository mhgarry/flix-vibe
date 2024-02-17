/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontSize: {
        xl: [
          "4.5rem",
          {
            lineHeight: "1.6",
            fontWeight: "600",
          },
        ],
        lg: [
          "3.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "600",
          },
        ],
        md: [
          "2.313rem",
          {
            lineHeight: "1.4",
            fontWeight: "600",
          },
        ],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        "dark-gray": "#a6a6a6",
        "light-gray": "#f4f4f4",
      },
      spacing: {
        "side-padding": "1.313rem",
        "top-padding": ".813rem",
      },
      width: {
        nav: "118.0625rem",
        screen: "63rem",
      },
      borderRadius: {
        custom: "0.8125rem",
      },
      aspectRatio: {
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [aspectRatio],
};
