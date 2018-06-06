import React from 'react'
import { H1 } from '../components/common/Title'
import Spacer from '../components/common/Spacer'
import { FillSpace } from '../components/common/StyleHelpers'

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
