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

const Form = styled.form`

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
    if (target.value > 50) return
    this.setState({ message: target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.state.message.length) return

    const message = {
      id: Date.now(),
      text: this.state.message,
      time: new Date()
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
        <Form onSubmit={this.handleSubmit}>
          <TextField 
            onChange={this.handleChange}
            type="text"
            value={this.state.message}
            placeholder="Write something..."
          />
        </Form>
      </Wrapper>
    )
  }
}

export default Home