import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

const Svg = styled.svg`
  display: inline-block;
  vertical-align: -0.125em;
  height: 1em;
  overflow: visible;
  font-size: inherit;
  fill: currentColor;

  &:not(:root) {
    overflow: visible;
  }
`

export default function Icon({ glyph, ...rest }) {
  if (!glyph) return null

  const {
    icon: [width, height, , , path],
  } = findIconDefinition(
    typeof glyph === 'string'
      ? {
          iconName: glyph,
        }
      : glyph,
  )

  return (
    <Svg viewBox={`0 0 ${width} ${height}`} aria-hidden {...rest}>
      <path d={path} />
    </Svg>
  )
}

Icon.propTypes = {
  glyph: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ prefix: PropTypes.string, iconName: PropTypes.string }),
  ]).isRequired,
}
