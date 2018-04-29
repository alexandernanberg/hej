import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

const ProtectedRoute = withRouter(({ isAuthenticated, ...props }) => {
  if (!isAuthenticated) {
    return <Redirect to={`/login?redirect=${props.match.url}`} />
  }

  return <Route {...props} />
})

export default ProtectedRoute
