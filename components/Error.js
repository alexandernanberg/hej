import React from 'react'
import { H1 } from './Text'
import Spacer from './Spacer'
import FillSpace from './FillSpace'

export function ErrorScreen({
  title = 'An unexpected error occured',
  emoji = '😳',
  children,
}) {
  return (
    <FillSpace>
      <H1>
        {title} <span aria-hidden>{emoji}</span>
      </H1>
      {children && <Spacer h={3} />}
      {children}
    </FillSpace>
  )
}

export default function ErrorInline() {
  return null
}
