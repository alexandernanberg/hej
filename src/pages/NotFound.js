import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import { Button } from '../components/common/Button'
import Icon from '../components/common/Icon'
import { ErrorScreen } from '../components/Error'

const LinkedButton = Button.withComponent(Link)

export default function NotFound() {
  return (
    <Page title="404">
      <ErrorScreen title="404 – Not found" emoji="👀">
        <LinkedButton to="/">
          Go to startpage <Icon glyph="arrow-right" />
        </LinkedButton>
      </ErrorScreen>
    </Page>
  )
}
