import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export function rem(px) {
  return `${px / 16}rem`
}

export function spacing(n) {
  return rem(n * 4)
}

export const easings = {
  easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}

export const durations = {
  fast: '120ms',
  default: '200ms',
  slow: '360ms',
}

export const fontFamily = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`

export const colors = {
  gray900: '#171717',
  gray800: '#424242',
  gray700: '#616161',
  gray600: '#757575',
  gray500: '#808080',
  gray400: '#bdbdbd',
  gray300: '#e0e0e0',
  gray200: '#f5f5f5',
  gray100: '#fcf8f6',
  red500: '#fb371b',
  blue500: '#2196f3',
}

export const GlobalStyle = createGlobalStyle`
  ${normalize} /* stylelint-disable-line */

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    background-color: black;
  }

  body {
    font-family: ${fontFamily};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    display: inline-block;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
  }

  ::selection {
    color: black;
    background-color: white;
  }
`
