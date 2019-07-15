import React from 'react'
import { useFormin } from 'formin'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { Heading } from '../components/Typography'
import Button from '../components/Button'
import TextField from '../components/TextField'
import Icon from '../components/Icon'
import Box from '../components/Box'

export default function LoginPage() {
  const { getFormProps, getInputProps, isSubmitting } = useFormin({
    onSubmit: () => {},
  })

  return (
    <Layout title="Login">
      <Container variant="small">
        <form {...getFormProps()} method="POST" autoComplete="false">
          <Box cover alignItems="stretch" p={6}>
            <Heading variant="h1" mb={4}>
              Hej{' '}
              <span role="img" aria-label="wave">
                👋
              </span>
            </Heading>
            <Box mb={2}>
              <TextField
                type="email"
                label="Email"
                required
                {...getInputProps({ name: 'email' })}
              />
              <TextField
                type="password"
                label="Password"
                required
                {...getInputProps({ name: 'password' })}
              />
            </Box>
            <Button type="submit" busy={isSubmitting}>
              <span>Login</span>
              <Icon glyph="sign-in-alt" />
            </Button>
          </Box>
        </form>
      </Container>
    </Layout>
  )
}
