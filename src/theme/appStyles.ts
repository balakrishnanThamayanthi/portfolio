import { Theme } from "@mui/material/styles/createTheme";
import { makeStyles } from "@mui/styles";

const backgroundgradient = `linear-gradient(to right, #9333ea, #2563eb)`;
const backgroundhovergradient = `linear-gradient(to right, #7e22ce, #1d4ed8)`;

export const useStyles = makeStyles((theme: Theme) => ({
  profileHeading: {
    textTransform: "none",
    fontSize: "48px",
    fontFamily: "Geist",
    fontWeight: 700,
    backgroundColor: "transparent",
    color: "inherit",
    ".nav-label": {
      position: "relative",
      display: "inline-block",
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: "1px",
        width: 0,
        height: "2px",
        backgroundColor: "#2563eb",
        transition: "width 250ms ease",
      },
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "#2563eb",
      ".nav-label::after": {
        width: "100%",
      },
    },
  },
  secoundHeding: {
    textTransform: "none",
    fontSize: "24px",
    fontFamily: "Geist",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "12px",

    background: "linear-gradient(to right, #7748ec, #6a9cf3)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",

    "@media (max-width: 768px)": {
      fontSize: "36px",
    },

    "@media (max-width: 480px)": {
      fontSize: "30px",
    },
  },
  secondDescription: {
    textTransform: "none",
    fontSize: "20px",
    fontFamily: "Raleway",
    fontWeight: 400,
    textAlign: "center",
    lineHeight: "32px",
    color: "#666666",
    maxWidth: "768px",
    margin: "0 auto",

    "@media (max-width: 768px)": {
      fontSize: "18px",
    },

    "@media (max-width: 480px)": {
      fontSize: "16px",
    },
  },
  profileButton: {
    borderRadius: "12px",
    background: backgroundgradient,
    color: "#fff",
    textTransform: "none",
    padding: "16px 32px",
    fontSize: "18px",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(147, 51, 234, 0.25)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      background: backgroundhovergradient,
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },
  profileOutLineButton: {
    borderRadius: "12px",
    background: "#ffffff",
    color: "#374151",
    textTransform: "none",
    padding: "16px 32px",
    fontSize: "18px",
    fontWeight: 600,
    border: "1px solid #e5e7eb",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      background: "#f3f4f6",
      borderColor: "#d1d5db",
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },
  h2GradientHeading: {
    fontSize: "36px",
    fontWeight: 700,
    color: "transparent",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    backgroundImage: "linear-gradient(to right, #7748ec, #6a9cf3)",
    mb: "24px",
    textAlign: "center",
    lineHeight: 1.2,
  },
  h2blackcolorHeadiing: {
    fontSize: "48px",
    fontWeight: 700,
    color: "#111827",
    mb: 6,
    textAlign: "center",
  },
  aiProductCard: {
    background: "#ffffff",
    padding: "32px",
    borderRadius: "12px",
    border: "1px solid #f3f4f6",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
    boxSizing: "border-box",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

    "&:hover": {
      transform: "translateY(-6px) scale(1.02)",
      boxShadow: "0 12px 25px rgba(119, 72, 236, 0.15)",
      borderColor: "#d8ccfa",
    },
  },

  aiProductIcon: {
    fontSize: "48px",
    marginBottom: "16px",
    padding: "16px",
    borderRadius: "50%",
    background: "linear-gradient(to right, #f3e8ff, #dbeafe)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  aiProductTitle: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#111827",
    marginBottom: "12px",
  },

  aiProductDescription: {
    fontSize: "16px",
    color: "#4b5563",
    lineHeight: 1.6,
    minHeight: "48px",
  },
  aiProductSubtitle: {
    fontSize: "18px",
    color: "#4b5563",
    maxWidth: "768px",
    margin: "0 auto 48px",
    textAlign: "center",
    lineHeight: 1.7,
    fontWeight: 400,
  },
  viewAllProductsButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    // gap: "4px",
    background: "linear-gradient(to right, #7748ec, #6a9cf3)",
    color: "#ffffff",
    padding: "16px 32px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "none",
    textDecoration: "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      background: "linear-gradient(to right, #6935dc, #4f83e8)",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },
  contactSubHeading: {
    fontSize: "16px",
    fontWeight: 500,
  },

  textfieldprop: {
    marginTop: "3px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "#ffffff",
      transition: "all 0.3s ease",

      "& fieldset": {
        borderColor: "#d1d5db",
      },

      "&:hover fieldset": {
        borderColor: "#a855f7",
        borderWidth: "3px",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#9333ea",
        borderWidth: "3px",
      },

      "&.Mui-focused": {
        // boxShadow: "0 0 0 3px rgba(147, 51, 234, 0.12)",
      },
    },

    "& .MuiOutlinedInput-input": {
      padding: "12px 14px",
      fontSize: "15px",
      color: "#374151",
    },
  },
}));
