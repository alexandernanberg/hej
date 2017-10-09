import React from 'react'
// import styled from 'styled-components'
import { InjectGlobalStyle } from '../style'

export default props => (
  <div>
    <InjectGlobalStyle />
    {props.children}
  </div>
)
