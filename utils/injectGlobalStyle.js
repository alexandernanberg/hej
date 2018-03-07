import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

export default () => injectGlobal`
  ${reset}

  :root {
    --gray900: #1a1a1e;
    --gray800: #1f1f22;
    --gray600: #303030;
    --gray500: #6f6f6f;
    --gray400: #9f9f9f;
    --gray300: #e9ebed;
    --gray200: #f6f8fa;
    --gray100: #fafbfc;
    --blue500: #3498db;

    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    background-color: var(--gray900);
  }

  body {
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: inline-block;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
  }

  ::selection {
    color: white;
    background-color: black;
  }
`
