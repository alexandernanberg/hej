import React from 'react'
import { Spinner, Blade } from './style'

export default function Loader(props) {
  const mountTime = React.useRef(Date.now())
  const mountDelay = -(mountTime.current % 1000)

  return (
    <Spinner
      aria-label="Please wait"
      style={{ '--spinner-delay': `${mountDelay}ms` }}
      {...props}
    >
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
