import React from 'react'
import Box from '../Box'
import { Spinner, Blade } from './style'

export default function Loader(props) {
  return (
    <Spinner {...props}>
      <Blade />
      <Blade />
      <Blade />
      <Blade />
      <Blade />
      <Blade />
      <Blade />
      <Blade />
      <Blade />
      <Blade />
      <Blade />
      <Blade />
    </Spinner>
  )
}

export function LoadingScreen({ pastDelay }) {
  if (!pastDelay) return null

  return (
    <Box cover>
      <Loader />
    </Box>
  )
}
