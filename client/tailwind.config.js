/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1760px",
      },
      fontSize: {
        xl: [
          "4.5rem",
          {
            lineHeight: "1.1",
            fontWeight: "700",
          },
        ],
        lg: [
          "2.781rem",
          {
            lineHeight: "1.3",
            fontWeight: "600",
          },
        ],
        md: [
          "1.719rem",
          {
            lineHeight: "1.3",
            fontWeight: "600",
          },
        ],
        sm: [
          "1.063rem",
          {
            lineHeight: "1.65",
            fontWeight: "600",
          },
        ],
        xs: [
          "0.406rem",
          {
            lineHeight: "1.65",
            fontWeight: "400",
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
        globalPadding: "1.313rem",
      },
      width: {
        nav: "46%",
        screen: "67%",
        bigButton: "31%",
        logo: "4.125rem",
        hasIcon: "10.5%",
        container: "calc(98vw - 1.313rem)",
      },
      borderRadius: {
        custom: "1.75rem",
      },
      aspectRatio: {
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [aspectRatio],
};
