import React from 'react'
import App, { Container } from 'next/app'
import { GlobalStyle } from '../lib/style'
import '../lib/loadIcons'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}
