type ColorPalette = {
  [key: string]: string;
};

interface AppColor {
  lightThemeColor: ColorPalette;
  darkThemeColor: ColorPalette;
}

export const appColors: AppColor = {
  lightThemeColor: {
    "background": "#ffffff",

    primarymain: "#298076",
    primarycontrastText: "#298076",

    secondarymain: "#f5f5f5",
    secondarycontrastText: "#f5f5f5",

    success: "#198754",
    warning: "#ffc107",
    info: "#0dcaf0",

    textprimary: "#000000",
    textsecondary: "#6c757d",

    divider: "#dee2e6",

    toolbar: "#f3f3f3",
    toolbartext: "#374151",
  },
  darkThemeColor: {
    primarymain: "#298076",
    primarycontrastText: "#298076",

    secondarymain: "#f5f5f5",
    secondarycontrastText: "#f5f5f5",

    success: "#198754",
    warning: "#ffc107",
    info: "#0dcaf0",

    textprimary: "#000000",
    textsecondary: "#6c757d",

    divider: "#dee2e6",

    toolbar: "#f3f3f3",
    toolbartext: "#374151",
  },
};
