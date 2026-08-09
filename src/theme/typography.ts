import { appColors } from "./appcolors";

export const typography = {
  fontFamily: 'var(--bs-font-primary, "Hanken Grotesk", sans-serif)',
  h1: {
    fontSize: "calc(1.35rem + 1.2vw)",
    fontWeight: 600,
    lineHeight: 1.1,
    // color: "#aab8c5",
    "@media (min-width: 1200px)": {
      fontSize: "2.25rem",
    },
  },
  h2: {
    fontSize: "calc(1.3125rem + 0.75vw)",
    fontWeight: 600,
    lineHeight: 1.1,
    // color: "#aab8c5",
    "@media (min-width: 1200px)": {
      fontSize: "1.875rem",
    },
  },
  h3: {
    fontSize: "calc(1.275rem + 0.3vw)",
    fontWeight: 600,
    lineHeight: 1.1,
    // color: "#aab8c5",
    "@media (min-width: 1200px)": {
      fontSize: "1.5rem",
    },
  },
  h4: {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.1,
    color: "#aab8c5",
  },
  h5: {
    fontSize: "0.9375rem",
    fontWeight: 600,
    lineHeight: 1.1,
    color: "#aab8c5",
  },
  h6: {
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: 1.1,
    color: "#aab8c5",
  },
  body1: {
    fontSize: "0.875rem", 
    // color: "#9097a7",
    // lineHeight: 1.5,
    // marginBottom: '1rem',
  },
  body2: {
    fontSize: "0.875rem",
    // lineHeight: 1.43,
    // marginBottom: "1rem",
  },
  subtitle1: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.57,
    marginBottom: "0.5rem",
  },
  subtitle2: {
    fontSize: "0.75rem",
    fontWeight: 500,
    lineHeight: 1.57,
    marginBottom: "0.5rem",
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 700,
    lineHeight: 2.66,
    textTransform: "uppercase",
  },
};
