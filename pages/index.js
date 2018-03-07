import React from 'react'
import axios from 'axios'
import Cookie from 'js-cookie'
import styled from 'styled-components'
import io from 'socket.io-client'
import Base from '../components/Base'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { API } from '../utils/constants'

const App = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

class Home extends React.Component {
  static async getInitialProps({ req, res }) {
    const id = req ? req.cookies.userId : Cookie.get('userId')

    try {
      const messagesPromise = axios(`${API}/messages`)
      const userPromise = axios(`${API}/user?id=${id}`)
      const [{ data: messages }, { data: user }] = await Promise.all([
        messagesPromise,
        userPromise,
      ])

      if (user.error) throw new Error(user.error)

      return { messages, user }
    } catch (e) {
      return res.redirect('/login')
    }
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
        <App>
          <Sidebar />
          <Chat
            user={this.props.user}
            messages={this.state.messages}
            message={this.state.message}
            onChange={this.handleMessageChange}
            onSubmit={this.handleMessageSubmit}
          />
        </App>
      </Base>
    )
  }
}

export default Home
