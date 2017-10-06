import React from 'react'
import { InjectGlobalStyle } from '../style'

export default props => (
  <div>
    <InjectGlobalStyle />
    {props.children}
  </div>
)
