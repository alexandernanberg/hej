import React from 'react'
import Router from 'next/router'
import Formin from 'formin'
import * as auth from '../lib/auth'
import Layout from '../components/Layout'
import { H1 } from '../components/Text'
import Button from '../components/Button'
import TextField from '../components/TextField'
import Spacer from '../components/Spacer'
import Icon from '../components/Icon'
import Form from '../components/Form'
import FillSpace from '../components/FillSpace'

export default class Login extends React.Component {
  onSubmit = ({ values: { username, email }, setSubmitting }) => {
    auth
      .login({
        username,
        email,
      })
      .then(() => {
        Router.replace('/')
      })
      .catch((e) => {
        console.error(e)
        setSubmitting(false)
      })
  }

  render() {
    return (
      <Layout title="Login">
        <FillSpace>
          <Formin onSubmit={this.onSubmit}>
            {({ getFormProps, getInputProps, isSubmitting }) => (
              <Form {...getFormProps()}>
                <H1>
                  Hej{' '}
                  <span role="img" aria-label="wave">
                    👋
                  </span>
                </H1>
                <Spacer h={3} />
                <TextField
                  label="Username"
                  {...getInputProps({ name: 'username' })}
                  required
                />
                <TextField
                  type="email"
                  label="Email"
                  {...getInputProps({ name: 'email' })}
                  required
                />
                <Spacer h={3} />
                <Button type="submit" loading={isSubmitting}>
                  <span>Login</span>
                  <Icon glyph="arrow-right" />
                </Button>
              </Form>
            )}
          </Formin>
        </FillSpace>
      </Layout>
    )
  }
}
