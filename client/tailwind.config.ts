import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "8rem",
        },
      },
      fontFamily: {
        primary: ["Poppins"],
      },
      colors: {
        primary: {
          dark: "rgba(var(--color-primary-dark))",
          DEFAULT: "rgba(var(--color-primary-default))",
          light: "rgba(var(--color-primary-light))",
        },
        secondary: {
          dark: "rgba(var(--color-secondary-dark))",
          DEFAULT: "rgba(var(--color-secondary-default))",
          light: "rgba(var(--color-secondary-light))",
        },
        state: {
          success: {
            darkest: "var(--color-state-success-darkest)",
            dark: "var(--color-state-success-dark)",
            DEFAULT: "var(--color-state-success-default)",
            light: "var(--color-state-success-light)",
            lightest: "var(--color-state-success-lightest)",
          },
          warning: {
            dark: "var(--color-state-warning-dark)",
            DEFAULT: "var(--color-state-warning-default)",
            light: "var(--color-state-warning-light)",
          },
          error: {
            darkest: "var(--color-state-error-darkest)",
            dark: "var(--color-state-error-dark)",
            DEFAULT: "var(--color-state-error-default)",
            light: "var(--color-state-error-light)",
            lightest: "var(--color-state-error-lightest)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
