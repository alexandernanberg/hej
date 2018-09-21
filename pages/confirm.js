import React from 'react'
import io from 'socket.io-client'
import auth from '../lib/auth'
import Layout from '../components/Layout'
import { H1 } from '../components/Text'
import FillSpace from '../components/FillSpace'

export default class Confirm extends React.Component {
  state = {}

  componentDidMount() {
    this.socket = io()

    auth.parseHash(window.location.hash).then((authResult) => {
      auth.setSession(authResult)
      this.socket.emit('confirm')
    })
  }

  componentWillUnmount() {
    this.socket.close()
  }

  render() {
    return (
      <Layout title="Confirm">
        <FillSpace>
          <H1>Confirmed</H1>
        </FillSpace>
      </Layout>
    )
  }
}
