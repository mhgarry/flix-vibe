/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        custom: "1.75rem",
      },
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
        xmd: [
          "2.063rem",
          {
            lineHeight: "1.3",
            fontWeight: "600",
          },
        ],
        md: [
          "clamp(1.125rem, 0.4107rem + 1.1161vi, 1.75rem)",
          {
            lineHeight: "1.3",
            fontWeight: "600",
          },
        ],
        sm: [
          "clamp(0.5rem, 0.2185rem + 0.9383vi, 1.063rem)",
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
        nav: "calc(46% - 10px)",
        screen: "67%",
        bigButton: "calc(31.25% - 1.313rem)",
        logo: "12.25rem",
        hasIcon: "10.5%",
        container: "calc(98vw - 1.313rem)",
        tabletContainer: "calc(100vw - 1.313rem)",
        menuContainer: "calc(66.67% - 1.313rem)",
        mobileMenu: "33.67%",
        navText: "41.25rem",
        iconBox: "12.69rem",
      },
      aspectRatio: {
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [aspectRatio],
};
