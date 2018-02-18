import React from 'react'
import styled from 'styled-components'
import { formatDistance } from 'date-fns'

const Time = styled.time`
  margin-bottom: 2.4rem;
  font-size: 1rem;
  white-space: nowrap;
  color: var(--gray400);
`

const Message = styled.div`
  max-width: 75%;

  ${props =>
    props.isCurrentUser &&
    `
    align-self: flex-end;

    & img {
      order: 1;
    }

    & p {
      background-color: var(--blue500);
      border-radius: 3.2rem 3.2rem 0 3.2rem;
      color: white;
    }
  `} ${props =>
  props.sameAuthorAsPrev &&
      `
    & img {
      opacity: 0;
    }

    & time {
      display: none;
    }
  `};
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
`

const Bubble = styled.p`
  padding: 0.8rem 1.2rem;
  border-radius: 1.6rem 1.6rem 1.6rem 0;
  background-color: var(--gray300);
  color: var(--gray600);
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 1.8rem;
  margin: 0;
`

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  align-self: flex-end;
  grid-area: avatar;
  margin: 0 4px;
`

export default ({
  message, prevMessage, user, ...rest
}) => {
  const isCurrentUser = message.user.id === user.id
  const sameAuthorAsPrev =
    prevMessage && message.user.id === prevMessage.user.id

  return (
    <Message
      isCurrentUser={isCurrentUser}
      sameAuthorAsPrev={sameAuthorAsPrev}
      {...rest}
    >
      <Row>
        <Avatar src={message.user.avatar} />
        <Bubble>{message.content}</Bubble>
      </Row>
      <Time>
        {formatDistance(message.time, Date.now(), { addSuffix: true })}
      </Time>
    </Message>
  )
}
