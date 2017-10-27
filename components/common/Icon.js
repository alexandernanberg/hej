import React from 'react'
import styled from 'styled-components'
import iconMap from '../../utils/getIconMap'

const Svg = styled.svg`
  display: inline-block;
  fill: currentColor;
  width: 1em;
  height: 1em;
  pointer-events: none;
`

export default ({ name, ...rest }) => (
  <Svg viewBox={iconMap[name].viewBox} {...rest}>
    <path d={iconMap[name].path} />
  </Svg>
)
