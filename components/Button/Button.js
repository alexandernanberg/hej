import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Loader from '../Loader'
import { StyledButton } from './style'

const Button = forwardRef(function Button(
  { children, href, as, disabled, busy, ...props },
  ref,
) {
  const component = as || (href ? 'a' : undefined)

  const button = (
    <StyledButton
      {...props}
      as={component}
      ref={ref}
      disabled={disabled || busy}
      aria-busy={busy}
    >
      {busy ? <Loader gray /> : children}
    </StyledButton>
  )

  return href ? (
    <Link href={href} passHref>
      {button}
    </Link>
  ) : (
    button
  )
})

Button.propTypes = {
  disabled: PropTypes.bool,
  busy: PropTypes.bool,
  href: PropTypes.string,
}

export default Button
