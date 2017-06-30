import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>Hej 👋</title>
          <style>{`
            body {
              margin: 0;
              padding: 0;
              font-family: BlinkMacSystemFont, Helvetica, sans-serif;
              -webkit-font-smoothing: antialiased;
            }
          `}
          </style>
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}