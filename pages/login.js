import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import Formin from 'formin'
import Cookies from 'js-cookie'
// import { WebAuth } from 'auth0-js'
import Layout from '../components/Layout'
import { H1 } from '../components/Text'
import Button from '../components/Button'
import TextField from '../components/TextField'
import Spacer from '../components/Spacer'
import Icon from '../components/Icon'
import FillSpace from '../components/FillSpace'

// const webAuth = new WebAuth({
//   domain: 'nanberg.eu.auth0.com',
//   clientID: 'QU1uKytWUKpyiG9lv0mSvZ2P6q2o4IKZ',
//   redirectUri: 'http://localhost:3000/login',
//   responseType: 'token',
//   scope: 'openid profile',
// })

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  padding: 2.4rem;
`

export default class Login extends React.Component {
  onSubmit = () => {
    // fake auth
    setTimeout(() => {
      Cookies.set('auth', true)
      Router.replace('/')
    }, 1000)
    // this.setState({ isLoading: true })

    // webAuth.passwordlessStart(
    //   {
    //     connection: 'email',
    //     send: 'link',
    //     email: values.email,
    //   },
    //   (err, res) => {
    //     console.log(err)
    //     console.log(res)
    //     // handle errors or continue
    //   },
    // )
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
