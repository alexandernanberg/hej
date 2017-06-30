import React from 'react'
import styled from 'styled-components'
import ChatBubble from './ChatBubble'

const Wrapper = styled.ul`
  display: flex;
  flex-flow: column wrap;
  max-width: 100vw;
  overflow: hidden;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 16px 16px 164px;
  list-style: none;
`

const Chat = ({ messages = [] }) => (
  <Wrapper>
    { messages.map(message => 
      <ChatBubble key={message.id} message={message} />) 
    }
  </Wrapper>
)

export default Chat