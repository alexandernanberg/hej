import React from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import Base from '../components/Base'
import Chat from '../components/Chat'
import Signup from '../components/Signup'

const getCachedUser = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('user')) || null
  }

  return null
}

class Home extends React.Component {
  static async getInitialProps() {
    const { data: messages } = await axios('http://localhost:3000/messages')
    const { data: users } = await axios('http://localhost:3000/users')
    return { messages, users }
  }

  static defaultProps = {
    messages: [],
  }

  state = {
    user: getCachedUser() || { id: 123 },
    users: this.props.users,
    message: '',
    messages: this.props.messages,
  }

  componentDidMount() {
    this.socket = io()
    this.socket.on('message', this.handleIncomingMessage)
    this.socket.on('user', this.handleIncomingUser)
  }

  componentWillUnmount() {
    this.socket.off('message', this.handleIncomingMessage)
    this.socket.close()
  }

  handleIncomingMessage = (message) => {
    console.log(message)
    this.setState(state => ({
      messages: [
        ...state.messages,
        message,
      ],
    }))
  }

  handleMessageChange = ({ target }) => {
    if (target.value.length > 140) return
    this.setState({ message: target.value })
  }

  handleMessageSubmit = (e) => {
    e.preventDefault()
    const { message, user } = this.state
    if (!message.trim().length) return

    this.socket.emit('message', { user, message })
    this.setState({ message: '' })
  }

  handleIncomingUser = (user) => {
    if (this.state.user.nick === user.nick) {
      this.setState({ user })
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  handleSignupSubmit = (user) => {
    this.socket.emit('user', user)
    this.setState({ user })
  }

  render() {
    return (
      <Base>
        {/* {this.state.user
          ? <Chat
            user={this.state.user}
            messages={this.state.messages}
            message={this.state.message}
            onChange={this.handleMessageChange}
            onSubmit={this.handleMessageSubmit}
          />
          : <Signup onSubmit={this.handleSignupSubmit} />
        } */}
        <Chat
          user={this.state.user}
          messages={this.state.messages}
          message={this.state.message}
          onChange={this.handleMessageChange}
          onSubmit={this.handleMessageSubmit}
        />
      </Base>
    )
  }
}

export default Home
