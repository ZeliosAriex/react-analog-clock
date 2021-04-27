import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      baseSize: string
    }
    colors: {
      primary: string
      primaryDark: string
      secondary: string
      secondaryDark: string
      error: string
      errorDark: string
      success: string
      successDark: string
      warning: string
      warningDark: string

      title: string
      body: string
      label: string
      placeholder: string

      background: string
      inputBackground: string
    }
  }
}
