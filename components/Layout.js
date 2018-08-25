import React from 'react'
import Head from 'next/head'

export default function Layout({ children, title = 'Hej' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
