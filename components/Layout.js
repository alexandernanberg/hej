import React from 'react'
import Head from 'next/head'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} – Hej` : 'Hej'}</title>
      </Head>
      {children}
    </>
  )
}
