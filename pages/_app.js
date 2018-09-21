import React from 'react'
import App, { Container } from 'next/app'
import '../lib/loadIcons'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
