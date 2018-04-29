import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const Fullscreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

export const LoadingScreen = () => (
  <Fullscreen>
    <Loader />
  </Fullscreen>
)

export default Loader
