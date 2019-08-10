import React from 'react'
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
