import React from 'react'
import Layout from '../components/Layout'
import FillSpace from '../components/FillSpace'
import Button from '../components/Button'
import Loader from '../components/Loader'
import Spacer from '../components/Spacer'
import { H1 } from '../components/Text'
import { redirect, parseCookies } from '../lib/utils'
import * as auth from '../lib/auth'

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
          <H1>Home</H1>
          <Loader />
          <Spacer h={3} />
          <Button
            onClick={() => {
              auth.logout()
            }}
          >
            Logout
          </Button>
        </FillSpace>
      </Layout>
    )
  }
}
