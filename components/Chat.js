import React from 'react'
import styled from 'styled-components'
import Message from './Message'
import ChatField from '../components/ChatField'

const Chat = styled.div`
  display: grid;
  align-content: space-between;
  min-height: 100vh;
  background-color: white;
`

const List = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  padding: 1.6rem;
  margin-bottom: 1.6rem;
`

export default ({ messages = [], message, user, onSubmit, onChange }) => (
  <Chat>
    <List>
      { messages.map(msg =>
        <Message key={msg.id} message={msg} user={user} />)
      }
    </List>
    <ChatField
      onSubmit={onSubmit}
      onChange={onChange}
      value={message}
      placeholder="Say something..."
      autoFocus
    />
  </Chat>
)
