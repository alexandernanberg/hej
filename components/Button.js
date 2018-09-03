import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Spinner } from './Loader/style'

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

const Button = styled.button`
  ${buttonBase};
`

export default Button

const ButtonLink = styled(Button.withComponent('a'))`
  cursor: pointer;
`

export function LinkedButton({ children, href, ...props }) {
  return (
    <Link href={href}>
      <ButtonLink {...props}>{children}</ButtonLink>
    </Link>
  )
}
