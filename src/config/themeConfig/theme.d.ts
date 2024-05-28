/* 
    // override or add custom theme colors
    // this customization is only applicable to dark mode of material-ui theme

    https://mui.com/material-ui/customization/theming/#custom-variables
    https://mui.com/material-ui/customization/palette/
*/

import { PaletteColorOptions, ThemeOptions } from '@material-ui/core'

declare module '@material-ui/core' {
  interface Theme {
    name: string
  }

  interface ThemeOptions {
    name: string
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    button: {
      primary: string
      primaryHover: string
      primaryActive: string
      secondary: string
      tertiary: string
      tertiaryHover: string
    }
    common: {
      green: string
      blue: string
      blueLight: string
      orange: string
      yellow: string
      pink: string
    }
    error: {
      background: string
    }
    label: {
      success: string
      warning: string
      error: string
      info: string
      contrastText: string
    }
    module: {
      background: string
      backgroundLight: string
      border: string
    }
    text: {
      label: string
    }
  }

  interface PaletteOptions {
    button?: {
      primary: string
      primaryHover: string
      primaryActive: string
      secondary: string
      tertiary: string
      tertiaryHover: string
    }
    common: {
      green: string
      blue: string
      blueLight: string
      orange: string
      yellow: string
      pink: string
    }
    error: {
      background: string
    }
    label?: {
      success: string
      warning: string
      error: string
      info: string
      contrastText: string
    }
    module?: {
      background: string
      backgroundLight: string
      border: string
    }
    text: {
      label: string
    }
  }

  interface PaletteColor {
    background: string
  }

  interface CommonColors {
    green: string
    blue: string
    blueLight: string
    orange: string
    yellow: string
    pink: string
    red: string
  }

  interface TypeText {
    label: string
  }

  interface SimplePaletteColorOptions {
    background?: string
  }
}
