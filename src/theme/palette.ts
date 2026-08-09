import { PaletteOptions } from '@mui/material/styles';
import { appColors } from './appcolors';

const getPalette = (mode: 'light' | 'dark'): PaletteOptions => ({
  background: {
    default: mode === 'light' ? appColors.lightThemeColor['background'] : appColors.darkThemeColor['background'],
  },
  primary: {
    main: mode === 'light' ? appColors.lightThemeColor['primarymain'] : appColors.darkThemeColor['primarymain'],
    contrastText: mode === 'light' ? appColors.lightThemeColor['primarycontrastText'] : appColors.darkThemeColor['primarycontrastText'],
  },
  secondary: {
    main: mode === 'light' ? appColors.lightThemeColor['secondarymain'] : appColors.darkThemeColor['secondarymain'],
    contrastText: mode === 'light' ? appColors.lightThemeColor['secondarycontrastText'] : appColors.darkThemeColor['secondarycontrastText'],
  },
  success: {
    main: mode === 'light' ? appColors.lightThemeColor['success'] : appColors.darkThemeColor['success'],
  },
  warning: {
    main: mode === 'light' ? appColors.lightThemeColor['warning'] : appColors.darkThemeColor['warning'],
  },
  info: {
    main: mode === 'light' ? appColors.lightThemeColor['info'] : appColors.darkThemeColor['info'],
  },
  text: {
    primary: mode === 'light' ? appColors.lightThemeColor['textprimary'] : appColors.darkThemeColor['textprimary'],
    secondary: mode === 'light' ? appColors.lightThemeColor['textsecondary'] : appColors.darkThemeColor['textsecondary'],
  },
  divider: mode === 'light' ? appColors.lightThemeColor['divider'] : appColors.darkThemeColor['divider'],
  

  // Add custom topbar colors
topbar: {
    toolbar: mode === 'light' ? appColors.lightThemeColor['toolbar'] : appColors.darkThemeColor['toolbar'],
    toolbartext: mode === 'light' ? appColors.lightThemeColor['toolbartext'] : appColors.darkThemeColor['toolbartext'],
  },
 
});

// Export palettes for light and dark modes
export const paletteLight: PaletteOptions = getPalette('light');
export const paletteDark: PaletteOptions = getPalette('dark');
