import React from 'react'
import styled from 'styled-components'
import { colors } from '../style'

const TextField = styled.input`
  padding: 1rem 1.6rem;
  margin-bottom: 1.6rem;
  border: solid 1px ${colors.gray300};
  border-radius: 50px;
  outline: none;
  font-size: 1.4rem;
  line-height: auto;
  color: ${colors.gray600};
  white-space: pre-line;
  resize: none;
  background-color: white;
`

export default props => (
  <TextField type="text" {...props} />
)
