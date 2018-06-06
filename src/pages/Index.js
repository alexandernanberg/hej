import React from 'react'
import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Loader from '../components/common/Loader'
import { H1 } from '../components/common/Title'

export default class Index extends React.Component {
  state = {
    counter: 0,
  }

  render() {
    return (
      <Page>
        <Navbar />
        <H1>Home. {this.state.counter}</H1>
        <button
          onClick={() => {
            this.setState(state => ({ counter: state.counter + 1 }))
          }}
        >
          Increment
        </button>
        <Loader />
      </Page>
    )
  }
}
