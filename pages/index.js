import React from 'react'
import Layout from '../components/Layout'
import { FillSpace } from '../components/StyleHelpers'
import Loader from '../components/Loader'
import { H1 } from '../components/Text'
import { redirect, parseCookies } from '../lib/utils'

export default class Index extends React.Component {
  static getInitialProps(context) {
    const cookies = parseCookies(context)
    if (!cookies.auth) {
      redirect(context, '/login')
    }

    return {}
  }

  render() {
    return (
      <Layout>
        <FillSpace>
          <H1>Home.</H1>
          <Loader />
        </FillSpace>
      </Layout>
    )
  }
}
