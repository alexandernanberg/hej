import React from 'react'
import styled from 'styled-components'
import TextField from './common/TextField'
import { BaseButton } from './common/Button'
import SendIcon from '../icons/send.svg'
import { colors } from '../style'

const ChatField = styled.form`
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  margin-top: auto;
  padding: 1.2rem 0.8rem;
  background-color: ${colors.gray100};
  border-top: solid 1px ${colors.gray300};
`

const Input = TextField.extend`
  flex-grow: 1;
  margin-bottom: 0;
`

const Button = BaseButton.extend`
  width: 4rem;
  height: 4rem;
  padding: 0;
  margin: auto 0 auto 0.8rem;
`

export default ({ onSubmit, ...props }) => (
  <ChatField onSubmit={onSubmit}>
    <Input {...props} />
    <Button>
      <SendIcon width="24px" height="24px" />
    </Button>
  </ChatField>
)
