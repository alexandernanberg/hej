import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FillSpace } from './StyleHelpers'

const spin = keyframes`
  from {
    transform: none;
  }

  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  border: solid 2px white;
  border-left-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

export const LoadingScreen = () => (
  <FillSpace>
    <Loader />
  </FillSpace>
)

export default Loader
