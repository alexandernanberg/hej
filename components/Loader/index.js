import React from 'react'
import { FillSpace } from '../StyleHelpers'
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
    <FillSpace>
      <Loader />
    </FillSpace>
  )
}
