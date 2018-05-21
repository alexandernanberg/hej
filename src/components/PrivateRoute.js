import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

function getRedirectParam(url) {
  if (url === '/') {
    return ''
  }

  return `?redirect=${url}`
}

function PrivateRoute({ isAuthenticated, ...props }) {
  if (!isAuthenticated) {
    return <Redirect to={`/login${getRedirectParam(props.match.url)}`} />
  }

  return <Route {...props} />
}

export default withRouter(PrivateRoute)
