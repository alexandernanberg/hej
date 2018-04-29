import styled, { css } from 'styled-components'

export const buttonBase = css`
  appearance: none;
  margin: 0;
  border: none;
  background: transparent;
  padding: 1.4rem 2.4rem;
  border-radius: 2px;
  font-family: var(--font-family);
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: white;
  transition: all var(--time-fast) var(--ease-out-quad);

  &:hover,
  &:focus {
    // transform: translateY(-1px);
  }

  & svg {
    margin: 0 0.4rem;
  }
`

export const Button = styled.button`
  ${buttonBase};
`
