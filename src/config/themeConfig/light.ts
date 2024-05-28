import { Themes } from "../constant";

export default {
  name: Themes.LIGHT,
  palette: {
    // type: 'light', // TODO: add this palette
    common: {
      green: '#1eb7a1',
      blue: '#0161e7',
      blueLight: '#187bff',
      orange: '#ff7201',
      yellow: '#f49e00',
      pink: '#fc8ebe',
      red: '#f44336',
    },
    label: {
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3',
      contrastText: '#fff',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#2f3334',
      secondary: '#888492',
      label: '#5c6063',
    },
    primary: {
      light: '#63ead2',
      main: '#1eb7a1',
      dark: '#008673',
      contrastText: '#fff',
    },
    secondary: {
      light: '#187bff',
      main: '#0161e7',
      dark: '#0038b4',
      contrastText: '#fff',
    },
    error: {
      light: '#ff8b68',
      main: '#d75b3c',
      dark: '#a02b13',
      contrastText: '#fff',
      background: 'rgba(215,91,60,0.05)',
    },
    button: {
      primary: '#1eb7a1',
      primaryHover: '#1b9b88',
      primaryActive: '#128070',
      secondary: '#e9ecf2',
      tertiary: '#1eb7a1',
      tertiaryHover: '#e4f6f3',
    },
    module: {
      backgroundLight: '#fafbfd',
      background: '#f4f6fa',
      border: '#e9ecf2',
    },
  },
}
