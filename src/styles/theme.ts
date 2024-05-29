export const theme = {
  colors: {
    primary: '#FFCA0C',
    secondary: '#2F80ED',
    error: '#FF4D4D',
    point: '#DB9900',
    white: '#fff',
    black: '#000',
    900: '#212529',
    800: '#343A40',
    700: '#495057',
    600: '#868E96',
    500: '#ADB5BD',
    400: '#CED4DA',
    300: '#DEE2E6',
    200: '#E9ECEF',
    100: '#F1F3F5',
    50: '#F8F9FA',
  },
  font: {
    fontSizes: {
      xsmall: '0.75rem',
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '1.5rem',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
      heavy: 900,
    },
    fontFamily: 'SUIT-Regular',
  },
  radius: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.125rem',
    xlarge: '1.75rem',
  },
  layout: {
    minWidth: {
      mobile: '428px',
    },
  },
};
export type ThemeColors = keyof typeof theme.colors;
export type ThemeFontSizes = keyof typeof theme.font.fontSizes;
export type ThemeFontWeights = keyof typeof theme.font.fontWeights;
export type ThemeFontFamily = keyof typeof theme.font.fontFamily;
export type ThemeRadius = keyof typeof theme.radius;
export type ThemeLayoutMinWidth = keyof typeof theme.layout.minWidth;
export type Theme = typeof theme;
