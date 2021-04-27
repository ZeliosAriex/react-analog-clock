import { createGlobalStyle } from 'styled-components/macro'
import normalize from './normalize'
import '../assets/fonts/fonts.css'

export default createGlobalStyle`
  /* Include Normalize.css */
  ${normalize}
  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.fonts.baseSize};
  }
`
