import React from 'react'
import Router from 'next/router'
import io from 'socket.io-client'
import Formin from 'formin'
import auth from '../lib/auth'
import Layout from '../components/Layout'
import Text, { H1 } from '../components/Text'
import Button from '../components/Button'
import TextField from '../components/TextField'
import Spacer from '../components/Spacer'
import Icon from '../components/Icon'
import Loader from '../components/Loader'
import Form from '../components/Form'
import FillSpace from '../components/FillSpace'
import { redirect } from '../lib/utils'

export default class Login extends React.Component {
  static getInitialProps(context) {
    if (auth.isAuthenticated(context)) {
      redirect(context, '/')
    }

    return {}
  }

  state = {
    isAwaiting: false,
  }

  componentDidMount() {
    this.socket = io()
    this.socket.on('confirm', this.handleConfirmation)
  }

  componentWillUnmount() {
    this.socket.off('confirm', this.handleConfirmation)
    this.socket.close()
  }

  handleConfirmation = () => {
    Router.push('/')
  }

  onSubmit = ({ values: { email }, setSubmitting }) => {
    auth
      .login({
        email,
      })
      .then((res) => {
        // TODO: Handle use redirect param
        // Router.replace('/')
        console.log('done', res)
        this.setState({ isAwaiting: true })
      })
      .catch((e) => {
        // TODO: Display error message
        console.error(e)
        setSubmitting(false)
      })
  }

  render() {
    const { isAwaiting } = this.state

    return (
      <Layout title="Login">
        <FillSpace>
          <Formin onSubmit={this.onSubmit}>
            {({ getFormProps, getInputProps, values, isSubmitting }) => {
              if (isAwaiting) {
                return (
                  <>
                    <H1>Awaiting confirmation</H1>
                    <Spacer h={3} />
                    <Text>
                      We sent an email to <b>{values.email}</b>. Please login
                      with the provided link.
                    </Text>
                    <Spacer h={3} />
                    <Text>Waiting for your confirmation...</Text>
                    <Spacer h={1} />
                    <Loader />
                  </>
                )
              }

              return (
                <Form {...getFormProps()}>
                  <H1>
                    Hej{' '}
                    <span role="img" aria-label="wave">
                      👋
                    </span>
                  </H1>
                  <Spacer h={3} />
                  <TextField
                    type="email"
                    label="Email"
                    {...getInputProps({ name: 'email' })}
                    required
                  />
                  <Spacer h={3} />
                  <Button type="submit" loading={isSubmitting}>
                    <span>Login</span>
                    <Icon glyph="sign-in-alt" />
                  </Button>
                </Form>
              )
            }}
          </Formin>
        </FillSpace>
      </Layout>
    )
  }
}
