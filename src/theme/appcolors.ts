type ColorPalette = {
  [key: string]: string;
};

interface AppColor {
  themeColor: ColorPalette;
}

export const appColors: AppColor = {
  themeColor: {
    "primary":  "#298076",
    "secondary": "#f5f5f5",
    "accent": "#f5f5f5",
    "background": "#f5f5f5",
    "text": "#000000",
  },
};
