import { paletteDark, paletteLight } from "./palette";
import React, { createContext } from "react";
import { createTheme } from "@mui/material/styles";

interface ThemeContextType {
  mode: "light" | "dark";
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeLight = createTheme({
  palette: paletteLight,
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
  },
});

const themeDark = createTheme({
  palette: paletteDark,
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});

export { themeLight, themeDark };
