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
    messages: this.props.messages
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
    this.setState(state => ({ messages: state.messages.concat(message) }))
    window.scrollTo(0, document.body.scrollHeight);
  }

  handleChange = ({ target }) => {
    if (target.value.length > 1600) return
    this.setState({ message: target.value })
  }

  handeKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.sendMessage()
    }
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
            type="text"
            autoFocus
            value={this.state.message}
            placeholder="Write something..."
          />
        </form>
      </Wrapper>
    )
  }
}

export default Home
