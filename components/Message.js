import React from 'react'
import styled from 'styled-components'
import { formatDistance } from 'date-fns'
import { colors } from '../style'

const Text = styled.p`
  font-size: 1.8rem;
  margin: 0;
  color: inherit;
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

const Message = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.6rem 1.2rem;
  margin: 0 2.4rem 2.4rem;
  max-width: 75%;
  border-radius: 1.6rem 1.6rem 1.6rem 0;
  background-color: ${colors.gray300};
  color: ${colors.gray600};
  word-wrap: break-word;
  white-space: pre-wrap;

  ${props => props.isCurrentUser && `
    align-self: flex-end;
    border-radius: 3.2rem 3.2rem 0 3.2rem;
    background-color: ${colors.blue500};
    color: white;

    > time {
      left: auto;
      right: 0;
    }

    > img {
      left: auto;
      right: -2.8rem;
    }
  `}
`

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  left: -2.8rem;
  bottom: 0;
`

export default ({ message, user, ...rest }) => (
  <Message isCurrentUser={message.user.id === user.id} {...rest}>
    <Text>{message.content}</Text>
    <Avatar src={message.user.avatar} />
    <Time>{formatDistance(message.time, Date.now(), { addSuffix: true })}</Time>
  </Message>
)
