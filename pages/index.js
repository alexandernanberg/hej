import React from 'react'
import Layout from '../components/Layout'
import FillSpace from '../components/FillSpace'
import Button from '../components/Button'
import NoSSR from '../components/NoSSR'
import Loader from '../components/Loader'
import Icon from '../components/Icon'
import Spacer from '../components/Spacer'
import Text, { H1 } from '../components/Text'
import auth from '../lib/auth'
import { redirect } from '../lib/utils'

export default class Index extends React.Component {
  static getInitialProps(context) {
    if (!auth.isAuthenticated(context)) {
      redirect(context, '/login')
    }

    return {}
  }

  render() {
    return (
      <Layout>
        <FillSpace>
          <H1>Messages</H1>
          <Spacer h={3} />
          <NoSSR onSSR={<Loader />}>
            <Text>List all the conversations...</Text>
          </NoSSR>
          <Spacer h={6} />
          <Button
            onClick={() => {
              auth.logout()
            }}
          >
            <span>Sign out</span>
            <Icon glyph="sign-out-alt" />
          </Button>
        </FillSpace>
      </Layout>
    )
  }
}
