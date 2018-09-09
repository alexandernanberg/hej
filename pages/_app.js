import React from 'react'
import App, { Container } from 'next/app'
import { injectGlobalStyle } from '../lib/style'
import '../lib/loadIcons'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    injectGlobalStyle()

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
