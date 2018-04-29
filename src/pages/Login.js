import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { H1 } from '../components/common/Title'
import { Button } from '../components/common/Button'
import TextField from '../components/common/TextField'
import Spacer from '../components/common/Spacer'
import Icon from '../components/common/Icon'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 320px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2.4rem;
`

export default () => (
  <Page title="Login">
    <Form
      onSubmit={(event) => {
        event.preventDefault()
        console.log('submit', event)
      }}
    >
      <H1>
        Hej{' '}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </H1>
      <Spacer height={3} />
      <TextField label="Username" required />
      <TextField type="email" label="Email" requried />
      <Spacer height={3} />
      <Button>
        Login <Icon glyph="arrow-right" />
      </Button>
    </Form>
  </Page>
)
