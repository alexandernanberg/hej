import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Icon from '../components/Icon'
import { LinkedButton } from '../components/Button'
import { ErrorView } from '../components/Error'

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
          <Link href="/">
            <LinkedButton>
              Go to startpage <Icon glyph="arrow-right" />
            </LinkedButton>
          </Link>
        </ErrorView>
      </Layout>
    )
  }
}
