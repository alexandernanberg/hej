import { injectGlobal } from 'styled-components'

export const colors = {
  gray600: '#303030',
  gray500: '#6f6f6f',
  gray400: '#9f9f9f',
  gray300: '#e0e0e0',
  gray100: '#fafafa',
  blue500: '#3498db',
}

export const globalStyle = () => injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    color: white;
    background-color: black;
  }
`

export const InjectGlobalStyle = () => {
  globalStyle()
  return null
}
