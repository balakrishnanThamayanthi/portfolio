import { PaletteOptions } from "@mui/material/styles";

// Extend the Palette and PaletteOptions interfaces to include custom properties
declare module "@mui/material/styles" {
  interface Palette {
    topbar: {
      toolbar: string;
      toolbartext: string;
    };
  }

  interface PaletteOptions {
    topbar?: {
      toolbar: string;
      toolbartext: string;
    };
  }
}
