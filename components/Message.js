import React from 'react'
import styled from 'styled-components'
import { formatRelative, formatDistance } from 'date-fns'
import { colors } from '../style'

const Message = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.6rem 1.2rem;
  margin-bottom: 2.4rem;
  max-width: 50%;
  border-radius: 3.2rem 3.2rem 3.2rem 0;
  background-color: ${colors.blue500};
  word-wrap: break-word;
  white-space: pre-wrap;
`

const Text = styled.p`
  font-size: 1.8rem;
  margin: 0;
  color: white;
`

const Time = styled.time`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.2rem;
  color: ${colors.gray400};
  font-size: 1rem;
  white-space: nowrap;
`

export default ({ message, user, ...rest }) => (
  <Message user={message.user.id === user.id} {...rest}>
    <Text>{message.text}</Text>
    <Time>{formatDistance(message.time, Date.now(), { addSuffix: true })}</Time>
  </Message>
)
