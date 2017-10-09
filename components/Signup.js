import React from 'react'
import styled from 'styled-components'
import TextField from '../components/TextField'
import { colors } from '../style'

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 2.4rem;
  margin: auto;
  min-height: 100vh;
  max-width: 320px;
`

const Logo = styled.span`
  display: inline-block;
  width: 100%;
  margin-bottom: 0.4em;
  text-align: center;
  font-size: 5.2rem;
`

const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0.8em;
  font-size: 1.6rem;
  color: ${colors.blue500}
`

class Signup extends React.Component {
  state = {
    nick: '',
    email: '',
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Logo role="img">👋</Logo>
        <TextField
          name="nick"
          placeholder="Enter nickname"
          onChange={this.handleChange}
          required
        />
        <TextField
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={this.handleChange}
          required
        />
        <Button>Enter</Button>
      </Form>
    )
  }
}

export default Signup
