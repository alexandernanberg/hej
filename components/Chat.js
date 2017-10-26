import React from 'react'
import styled from 'styled-components'
import Message from './Message'
import ChatField from '../components/ChatField'

const Chat = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
  background-color: white;
`

const Scroll = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  width: 100%;
  height: 400px;
  -webkit-overflow-scrolling: touch;
`

const List = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.6rem;
  margin-bottom: 1.2rem;
`

export default ({
  messages = [],
  message,
  user,
  onSubmit,
  onChange,
}) => (
  <Chat>
    <Scroll>
      <List>
        { messages.map(msg =>
          <Message key={msg.id} message={msg} user={user} />)
        }
      </List>
    </Scroll>
    <ChatField
      onSubmit={onSubmit}
      onChange={onChange}
      value={message}
      placeholder="Say something..."
      autoFocus
    />
  </Chat>
)
