import React from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import styled from 'styled-components'
import Chat from '../components/Chat'
import TextField from '../components/TextField'

const Wrapper = styled.div`
  display: grid;
  align-content: space-between;
  min-height: 100vh;
`

class Home extends React.Component {
  static async getInitialProps({ req }) {
    const { data } = await axios('http://localhost:3000/messages')
    return { messages: data }
  }

  static defaultProps = {
    messages: []
  }

  state = {
    message: '',
    messages: this.props.messages,
  }

  keyMap = {
    13: false,
    16: false,
  }

  componentDidMount() {
    this.socket = io()
    this.socket.on('new message', this.handleMessage)
  }

  componentWillUnmount() {
    this.socket.off('new message', this.handleMessage)
    this.socket.close()
  }

  handleMessage = (message) => {
    this.setState(state => ({ messages: state.messages.concat(message) }))
    window.scrollTo(0, document.body.scrollHeight);
  }

  shouldSubmit(keyCode, state) {
    if (keyCode !== 13 && keyCode !== 16) {
      return false
    }

    this.keyMap = {
      ...this.keyMap,
      [keyCode]: state,
    }

    if (this.keyMap[13] && !this.keyMap[16]) {
      return true
    }

    return false
  }

  handeKeyDown = (event) => {
    const shouldSubmit = this.shouldSubmit(event.keyCode, true)

    if (shouldSubmit) {
      event.preventDefault()
      this.sendMessage()
    }
  }

  handleKeyUp = (event) => {
    this.shouldSubmit(event.keyCode, false)
  }

  handleChange = ({ target }) => {
    if (target.value.length > 1600) return
    this.setState({ message: target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.sendMessage()
  }

  sendMessage() {
    const text = this.state.message
    if (!text.length || text === ' ') return

    const message = {
      id: Date.now(),
      time: new Date(),
      text,
    }

    this.socket.emit('message', message)

    this.setState(state => ({
      message: '',
      messages: state.messages.concat(message)
    }))

    requestAnimationFrame(() => {
      window.scrollTo(0, document.body.scrollHeight);
    })
  }

  render() {
    return (
      <Wrapper>
        <Chat messages={this.state.messages} />
        <form onSubmit={this.handleSubmit}>
          <TextField
            onChange={this.handleChange}
            onKeyDown={this.handeKeyDown}
            onKeyUp={this.handleKeyUp}
            autoFocus
            value={this.state.message}
            placeholder="Say something..."
          />
        </form>
      </Wrapper>
    )
  }
}

export default Home
