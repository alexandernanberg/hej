import React from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import Base from '../components/Base'
import Chat from '../components/Chat'

class Home extends React.Component {
  static async getInitialProps() {
    const { data } = await axios('http://localhost:3000/messages')
    return { messages: data }
  }

  static defaultProps = {
    messages: [],
  }

  state = {
    user: {},
    message: '',
    messages: this.props.messages,
  }

  componentDidMount() {
    this.socket = io()
    this.socket.on('message', this.handleMessage)
  }

  componentWillUnmount() {
    this.socket.off('message', this.handleMessage)
    this.socket.close()
  }

  handleMessage = (message) => {
    this.setState(state => ({
      messages: [
        ...state.messages,
        message,
      ],
    }))
  }

  handleChange = ({ target }) => {
    if (target.value.length > 140) return
    this.setState({ message: target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { message } = this.state
    if (!message.trim().length) return

    this.socket.emit('message', message)
    this.setState({ message: '' })
  }

  render() {
    return (
      <Base>
        {this.state.user
          ? <Chat
            messages={this.state.messages}
            message={this.state.message}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          : <div>
            make usre
          </div>
        }
      </Base>
    )
  }
}

export default Home
