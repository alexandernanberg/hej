import React from 'react'
import axios from 'axios'
import Router from 'next/router'
import Cookie from 'js-cookie'
import styled from 'styled-components'
import TextField from '../components/common/TextField'
import Button from '../components/common/Button'
// import { colors } from '../style'
import { API } from '../utils/constants'

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

class LoginForm extends React.Component {
  state = {
    loading: false,
    nickname: '',
    email: '',
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { nickname, email } = this.state

    axios.post(`${API}/user`, { nickname, email })
      .then(({ data }) => {
        Cookie.set('userId', data.id)
        Router.push('/')
        console.log(data)
      })
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Logo><span role="img" aria-label="Logo">👋</span></Logo>
        <TextField
          name="nickname"
          placeholder="Your nickname"
          onChange={this.handleChange}
          value={this.state.nickname}
          required
        />
        <TextField
          type="email"
          name="email"
          placeholder="Your email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <Button disabled={this.state.loading}>Enter chat</Button>
        { this.state.loading &&
          <p>Laddar...</p>
        }
      </Form>
    )
  }
}

export default LoginForm
