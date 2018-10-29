import React from 'react'
import Head from 'next/head'

export default function Meta({ title }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="icon" href="/static/icon.png" />
      <link rel="apple-touch-icon" href="/static/icon.png" />
      <link rel="manifest" href="/static/manifest.json" />
      <title>{title ? `${title} – Hej` : 'Hej'}</title>
    </Head>
  )
}
