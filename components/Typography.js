import React from 'react'
import styled, { css } from 'styled-components'
import { rem, fontFamily } from '../style'
import { margin, text, textColor } from '../style/system'

const base = css(text, textColor.withDefaults({ textColor: 'white' }))

export const Text = styled.p`
  ${base}
  font-family: ${fontFamily};
  font-size: ${rem(16)};
  line-height: 1.5em;
  ${margin.withDefaults({ mb: '1em', mt: 0 })}

  & strong {
    font-weight: 700;
  }
`

function getHeadingVariant({ variant }) {
  switch (variant) {
    case 'h1':
      return css`
        font-size: ${rem(40)};
      `
    case 'h2':
      return css`
        font-size: ${rem(24)};
      `

    default:
      return null
  }
}

const StyledHeading = styled.h1`
  ${base}
  font-weight: bold;
  line-height: 1.2em;
  ${margin.withDefaults({ mb: 1, mt: 0 })}
  ${getHeadingVariant}
`

export function Heading({ variant, as, ...props }) {
  const Comp = as || variant

  return <StyledHeading as={Comp} variant={variant} {...props} />
}
