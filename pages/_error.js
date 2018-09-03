import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Icon from '../components/Icon'
import { LinkedButton } from '../components/Button'
import { ErrorScreen } from '../components/Error'

function getErrorInfo(statusCode) {
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

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const { statusCode } = res || err || {}
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props
    const { title, emoji } = getErrorInfo(statusCode)
    return (
      <Layout title={title}>
        <ErrorScreen title={title} emoji={emoji}>
          <Link href="/">
            <LinkedButton>
              Go to startpage <Icon glyph="arrow-right" />
            </LinkedButton>
          </Link>
        </ErrorScreen>
      </Layout>
    )
  }
}
