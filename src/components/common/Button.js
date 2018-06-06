import styled, { css } from 'styled-components'
import { Spinner } from './Loader'

export const buttonBase = css`
  appearance: none;
  margin: 0;
  border: none;
  padding: 1.6rem 2.4rem;
  border-radius: 2px;
  font-family: var(--font-family);
  font-size: 1.2rem;
  line-height: 1em;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  background: transparent;
  background-color: white;
  transition: all var(--time-fast) var(--ease-out-quad);

  &:hover,
  &:focus {
    /* transform: translateY(-1px); */
  }

  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  & ${/* sc-selector */ Spinner} {
    margin: -0.8rem 0;
  }

  & svg {
    margin: 0 0.4rem;
  }
`

export const Button = styled.button`
  ${buttonBase};
`
