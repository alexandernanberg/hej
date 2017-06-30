import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Wrapper = styled.li`
  position: relative;
  display: inline-block;
  padding: 16px 32px;
  margin-bottom: 44px;
  max-width: 50%;
  border-radius: 32px 32px 32px 0;
  background-color: #3498db;
  word-wrap: break-word;
  white-space: pre-wrap;
`

const Text = styled.p`
  font-size: 1.8rem;
  margin: 0;
  color: white;
`

const Time = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  color: #666;
  font-size: 0.8rem;
  white-space: nowrap;
`

const ChatBubble = ({ message }) => (
  <Wrapper>
    <Text>{message.text}</Text>
    <Time>{moment(message.time).fromNow()}</Time>
  </Wrapper>
)

export default ChatBubble