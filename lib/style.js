import { css, injectGlobal } from 'styled-components'
import { reset } from 'styled-reset'

export const breakpoints = {
  large: 1170,
  medium: 960,
  small: 620,
}

export const media = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${breakpoints[key]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export const injectGlobalStyle = () => injectGlobal`
  ${reset} /* stylelint-disable-line */

  :root {
    /* Font */
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Colors */
    --gray900: #212121;
    --gray800: #424242;
    --gray700: #616161;
    --gray600: #757575;
    --gray500: #808080;
    --gray400: #bdbdbd;
    --gray300: #e0e0e0;
    --gray200: #f5f5f5;
    --gray100: #fcf8f6;
    --red500: #fb371b;
    --blue500: #2196f3;

    /* Easings */
    --ease-out-sine: cubic-bezier(0.39, 0.575, 0.565, 1);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);

    /* Durations */
    --duration-fast: 120ms;
    --duration-default: 200ms;
    --duration-slow: 360ms;

    /* Space */
    --space-1: 0.4rem;
    --space-2: 0.8rem;
    --space-3: 1.2rem;
    --space-4: 1.6rem;
    --space-5: 2.4rem;
    --space-6: 3.2rem;
    --space-7: 4.8rem;
    --space-8: 6.4rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    background-color: black;
  }

  body {
    font-family: var(--font-family);
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
