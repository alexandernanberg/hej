import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Spinner } from './Loader/style'
import Loader from './Loader'
import { Svg } from './Icon'

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  appearance: none;
  margin: 0;
  border: none;
  padding: var(--space-4) var(--space-5);
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
  transition: all var(--duration-fast) var(--ease-out-quad);

  &:hover,
  &:focus {
    /* transform: translateY(-1px); */
  }

  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  & span + svg,
  & svg + span {
    margin-left: var(--space-1);
  }

  & ${/* sc-selector */ Spinner} {
    margin: -0.6rem 0;
  }

  & ${/* sc-selector */ Svg} {
    flex-shrink: 0;
  }
`

export default function Button({ children, disabled, loading, ...props }) {
  return (
    <StyledButton disabled={disabled || loading} {...props}>
      {loading ? <Loader gray /> : children}
    </StyledButton>
  )
}

export const ButtonLink = styled(StyledButton.withComponent('a'))`
  cursor: pointer;
`

export function LinkedButton({ children, href, ...props }) {
  return (
    <Link href={href}>
      <ButtonLink {...props}>{children}</ButtonLink>
    </Link>
  )
}
