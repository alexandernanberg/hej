import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { H1 } from '../components/common/Title'
import { Button } from '../components/common/Button'
import TextField from '../components/common/TextField'
import Spacer from '../components/common/Spacer'
import Icon from '../components/common/Icon'
import Loader from '../components/common/Loader'
import { FillSpace } from '../components/common/StyleHelpers'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  padding: 2.4rem;
`

export default class Login extends React.Component {
  state = {
    isLoading: false,
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log('submit', event)
    this.setState({ isLoading: true })

    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000)
  }

  render() {
    return (
      <Page title="Login">
        <FillSpace>
          <Form onSubmit={this.onSubmit}>
            <H1>
              Hej{' '}
              <span role="img" aria-label="wave">
                👋
              </span>
            </H1>
            <Spacer h={3} />
            <TextField label="Username" name="name" required />
            <TextField type="email" label="Email" name="email" required />
            <Spacer h={3} />
            <Button type="submit">
              {this.state.isLoading ? (
                <Loader gray />
              ) : (
                <span>
                  Login <Icon glyph="arrow-right" />
                </span>
              )}
            </Button>
          </Form>
        </FillSpace>
      </Page>
    )
  }
}
