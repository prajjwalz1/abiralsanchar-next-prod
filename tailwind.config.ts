/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      "3xs": "175px",
      "2xs": "300px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        khand: "var(--font-khand)",
        mukta: "var(--font-mukta)",
      },
      colors: {
        brand: {
          red: "#C62026",
          blue: "#2E3092",
        },
        "new-blue": {
          sky: "#70c9ff",
        },
      },
      zIndex: {
        minus_100: "-100",
        minus_10: "-10",
        minus_1: "-1",
        mobile_stepper: "1000",
        fab: "1050",
        speed_dial: "1050",
        app_bar: "1100",
        drawer: "1200",
        modal: "1300",
        snackbar: "1400",
        tooltip: "1500",
      },

      keyframes: {
        slideUp: {
          "0%": { height: "400px" },
          "100%": { height: "0" },
        },
        slideDown: {
          "0%": { height: "0" },
          "80%": { height: "h-fit" },
        },
        slideRightMiniLogo: {
          "0%": { marginLeft: "0" },
          "80%": { marginLeft: "56px" },
        },
        showUp: {
          "0%": { opacity: "1" },
          "30%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        showDown: {
          "0%": { opacity: "0" },
          "30%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        slideUp: "slideUp 0.3s ease-out",
        slideDown: "slideDown 0.3s ease-out",
        slideRightMiniLogo: "slideRightMiniLogo 0.5s ease-out",
        showUp: "showUp 0.6s ease-out",
        showDown: "showDown 0.6s ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
