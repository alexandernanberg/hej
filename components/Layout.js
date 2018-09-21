import React from 'react'
import Head from 'next/head'
import { GlobalStyle } from '../lib/style'

export default function Layout({ children, title }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{title ? `${title} – Hej` : 'Hej'}</title>
      </Head>
      {children}
    </>
  )
}
