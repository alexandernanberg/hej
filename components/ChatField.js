import React from 'react'
import styled from 'styled-components'
import TextField from './common/TextField'
import Icon from './common/Icon'
import { BaseButton } from './common/Button'

const ChatField = styled.form`
  position: fixed;
  z-index: 1;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  margin-top: auto;
  padding: 1.2rem 0.8rem;
  background-color: var(--gray100);
  border-top: solid 1px var(--gray300);
`

const Input = TextField.extend`
  flex-grow: 1;
  margin-bottom: 0;
`

const Button = BaseButton.extend`
  padding: 0;
  margin: auto 0 auto 0.8rem;
  width: 4rem;
  height: 4rem;
  font-size: 2.4rem;
`

export default ({ onSubmit, ...props }) => (
  <ChatField onSubmit={onSubmit}>
    <Input {...props} />
    <Button>
      <Icon name="send" />
    </Button>
  </ChatField>
)
