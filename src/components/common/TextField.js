import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  margin-bottom: 1.6rem;
  padding: 1.2rem 0;
  border: none;
  appearance: none;
  font-family: var(--font-family);
  font-size: 1.6rem;
  color: white;
  background-color: transparent;
  box-shadow: 0 1px 0 white;

  &:focus {
    outline: none;
    box-shadow: 0 2px 0 white;
  }

  &:placeholder {
    color: var(--gray200);
  }
`

// const Label = styled.label`
//   font-size: 1.2rem;
// `

const TextField = ({ label, ...props }) => (
  <Input placeholder={label} {...props} />
)

export default TextField
