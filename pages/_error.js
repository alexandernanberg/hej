import React from 'react'
import Layout from '../components/Layout'
import { ErrorScreen } from '../components/Error'

function getErrorInfo(statusCode) {
  switch (statusCode) {
    case 404:
      return {
        title: `${statusCode} – Not found`,
        emoji: '👀',
      }

    case 500:
      return {
        title: `${statusCode} – Internal server error`,
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
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props
    const { title, emoji } = getErrorInfo(statusCode)
    return (
      <Layout title={title}>
        <ErrorScreen title={title} emoji={emoji}>
          {/* <LinkedButton to="/">
          Go to startpage <Icon glyph="arrow-right" />
        </LinkedButton> */}
        </ErrorScreen>
      </Layout>
    )
  }
}
