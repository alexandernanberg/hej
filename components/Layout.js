import React from 'react'
import Meta from './Meta'
import { GlobalStyle } from '../style'

export default function Layout({ children, title }) {
  return (
    <>
      <Meta title={title} />
      <GlobalStyle />
      {children}
    </>
  )
}
