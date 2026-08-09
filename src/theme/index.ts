import { paletteDark, paletteLight } from "./palette"; 
import { typography } from "./typography";
import React, { createContext } from "react";
import { createTheme } from "@mui/material/styles";

interface ThemeContextType {
  mode: "light" | "dark";
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeLight = createTheme({
  palette: paletteLight,
  typography,
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
  typography,
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
