import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      // fontFamily: {
      //   khand: "Khand, sans-serif",
      // },
      colors: {
        "new-blue": {
          sky: "#70c9ff",
        },
      },
      zIndex: {
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
          "100%": { height: "400px" },
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
        slideUp: "slideUp 0.7s ease-out",
        slideDown: "slideDown 0.7s ease-out",
        showUp: "showUp 1s ease-out",
        showDown: "showDown 1s ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
