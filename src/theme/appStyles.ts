import { Theme } from "@mui/material/styles/createTheme";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  toolbarButton: {
    textTransform: "none",
    fontSize: "16px",
    fontFamily: "Geist",
    fontWeight: 500,
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
}));
