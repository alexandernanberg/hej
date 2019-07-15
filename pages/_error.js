import React from 'react'
import Layout from '../components/Layout'
import Icon from '../components/Icon'
import { LinkedButton } from '../components/Button'
import { Heading } from '../components/Typography'
import Box from '../components/Box'

export function ErrorView({
  title = 'An unexpected error occured',
  emoji = '😳',
  children,
}) {
  return (
    <Box cover>
      <Heading variant="h1">
        {title} <span aria-hidden>{emoji}</span>
      </Heading>
      {children && <Box mt={4}>{children}</Box>}
    </Box>
  )
}

function getErrorObject(statusCode) {
  switch (statusCode) {
    case 404:
      return {
        title: `${statusCode} Not found`,
        emoji: '👀',
      }

    case 500:
      return {
        title: `${statusCode} Internal server error`,
        emoji: '😳',
      }

    default:
      return {
        title: 'An unexpected error occured',
        emoji: '😳',
      }
  }
}

export default class ErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    const { statusCode } = res || err || {}
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props
    const { title, emoji } = getErrorObject(statusCode)

    return (
      <Layout title={title}>
        <ErrorView title={title} emoji={emoji}>
          <LinkedButton href="/">
            <span>Go to startpage</span>
            <Icon glyph="arrow-right" />
          </LinkedButton>
        </ErrorView>
      </Layout>
    )
  }
}
