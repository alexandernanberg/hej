import React from 'react'
import styled from 'styled-components'
import icons from '../../utils/getIcons'

const Svg = styled.svg`
  display: inline-block;
  fill: currentColor;
  width: 1em;
  height: 1em;
  pointer-events: none;
`

export default ({ name, ...rest }) => (
  <Svg viewBox={icons[name].viewBox} {...rest}>
    <path d={icons[name].path} />
  </Svg>
)
