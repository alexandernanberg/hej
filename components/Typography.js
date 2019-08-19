import React from 'react'
import styled, { css } from 'styled-components'
import { rem, fontFamily } from '../style'
import { margin, text, textColor, variant } from '../style/system'

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

const StyledHeading = styled.h1`
  ${base}
  font-weight: bold;
  line-height: 1.2em;
  ${margin.withDefaults({ mb: 1, mt: 0 })}
  ${variant({
    h1: css`
      font-size: ${rem(40)};
    `,
    h2: css`
      font-size: ${rem(24)};
    `,
  })}
`

export function Heading({ as, ...props }) {
  const component = as || props.variant

  return <StyledHeading as={component} {...props} />
}
