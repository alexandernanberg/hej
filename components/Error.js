import React from 'react'
import { H1 } from './Text'
import Spacer from './Spacer'
import FillSpace from './FillSpace'

export function ErrorView({
  title = 'An unexpected error occured',
  emoji = '😳',
  children,
}) {
  return (
    <FillSpace>
      <H1>
        {title} <span aria-hidden>{emoji}</span>
      </H1>
      {children && <Spacer h={4} />}
      {children}
    </FillSpace>
  )
}

export function ErrorInline() {
  return null
}
