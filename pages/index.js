import React from 'react'
import axios from 'axios'
import Cookie from 'js-cookie'
import io from 'socket.io-client'
import Base from '../components/Base'
import Chat from '../components/Chat'
import { API } from '../utils/constants'

const getUserById = async (id) => {
  if (!id) throw new Error('"Id" argument is not defined')
  const { data: user } = await axios(`${API}/user?id=${id}`)
  if (user.error) throw new Error(user.error)

  return user
}

const getUserCookie = (req) => {
  if (req) {
    return req.cookies.userId
  }

  return Cookie.get('userId')
}

class Home extends React.Component {
  static async getInitialProps({ req, res }) {
    const id = getUserCookie(req)
    const user = await getUserById(id).catch(() => {
      res.redirect('/login')
    })

    const messagesPromise = axios(`${API}/messages`)
    const [{ data: messages }] = await Promise.all([messagesPromise])

    return { messages, user }
  }

  state = {
    message: '',
    messages: this.props.messages,
  }

  componentDidMount() {
    this.socket = io()
    this.socket.on('message', this.handleIncomingMessage)
  }

  componentWillUnmount() {
    this.socket.off('message', this.handleIncomingMessage)
    this.socket.close()
  }

  handleIncomingMessage = (message) => {
    this.setState(state => ({
      messages: [...state.messages, message],
    }))
  }

  handleMessageChange = ({ target }) => {
    if (target.value.length > 140) return
    this.setState({ message: target.value })
  }

  handleMessageSubmit = (e) => {
    e.preventDefault()
    const { message } = this.state
    if (!message.trim().length) return

    this.socket.emit('message', { message, user: this.props.user })
    this.setState({ message: '' })
  }

  render() {
    return (
      <Base>
        <Chat
          user={this.props.user}
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
