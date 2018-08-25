import React from 'react'
import App, { Container } from 'next/app'
import { injectGlobalStyle } from '../lib/style'
import '../lib/loadIcons'

class MyApp extends App {
  render() {
    injectGlobalStyle()
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
