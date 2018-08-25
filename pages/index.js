import React from 'react'
import Router from 'next/router'
import cookie from 'cookie'
import Layout from '../components/Layout'
import { FillSpace } from '../components/StyleHelpers'
import Loader from '../components/Loader'
import { H1 } from '../components/Text'

function parseCookies(req, options = {}) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie, options)
}

function redirect(context, target) {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target)
  }
}

export default class Index extends React.Component {
  static getInitialProps(context) {
    const cookies = parseCookies(context.req)
    if (!cookies.auth) {
      redirect(context, '/login')
    }

    return {}
  }

  render() {
    return (
      <Layout>
        <FillSpace>
          <H1>Home.</H1>
          <Loader />
        </FillSpace>
      </Layout>
    )
  }
}
