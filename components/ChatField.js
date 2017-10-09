import React from 'react'
import styled from 'styled-components'
import TextField from './TextField'
import SendIcon from '../icons/send.svg'
import { colors } from '../style'

const ChatField = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.2rem 0.8rem;
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  background-color: ${colors.gray100};
  border-top: solid 1px ${colors.gray300};
`

const Input = styled(TextField)`
  flex-grow: 1;
  height: auto;
  margin-bottom: 0;
`

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border: 0;
  margin: auto 0 auto 0.8rem;
  background-color: transparent;
  cursor: pointer;
  fill: ${colors.blue500};
`

export default ({ onSubmit, ...props }) => (
  <ChatField onSubmit={onSubmit}>
    <Input {...props} />
    <Button>
      <SendIcon width="24px" height="24px" />
    </Button>
  </ChatField>
)
