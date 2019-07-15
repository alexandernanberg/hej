import React from 'react'
import Link from 'next/link'
import Loader from '../Loader'
import { StyledButton } from './style'

const Button = React.forwardRef(function Button(
  { children, disabled, busy, ...props },
  ref,
) {
  return (
    <StyledButton ref={ref} disabled={disabled || busy} {...props}>
      {busy ? <Loader gray /> : children}
    </StyledButton>
  )
})

export default Button

export const LinkedButton = React.forwardRef(function LinkedButton(
  { children, href, ...props },
  ref,
) {
  return (
    <Link href={href}>
      <Button as="a" {...props} ref={ref}>
        {children}
      </Button>
    </Link>
  )
})
