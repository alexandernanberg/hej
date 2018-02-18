import { injectGlobal } from 'styled-components'

const reset = preval`
  const fs = require('fs')
  module.exports = fs.readFileSync('node_modules/reset-css/reset.css', 'utf8')
`
export default () => injectGlobal`
  ${reset}

  :root {
    --gray600: #303030;
    --gray500: #6f6f6f;
    --gray400: #9f9f9f;
    --gray300: #e9ebed;
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
