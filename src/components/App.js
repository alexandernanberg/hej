import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import Helmet from 'react-helmet'
import Loadable from 'react-loadable'
import ErrorBoundary from 'react-error-boundary'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { LoadingScreen } from '../components/common/Loader'
import { injectGlobalStyle } from '../style'
import { ErrorScreen } from './Error'

const Index = Loadable({
  loader: () =>
    import('../pages/Index' /* webpackPrefetch: true, webpackChunkName: "index.route" */),
  loading: LoadingScreen,
})

const Login = Loadable({
  loader: () => import('../pages/Login' /* webpackChunkName: "login.route" */),
  loading: LoadingScreen,
})

const NotFound = Loadable({
  loader: () => import('../pages/NotFound' /* webpackChunkName: "404.route" */),
  loading: () => null,
})

function App() {
  injectGlobalStyle()

  return (
    <ErrorBoundary FallbackComponent={ErrorScreen}>
      <Router>
        <Fragment>
          <Helmet titleTemplate="%s - Hej" defaultTitle="Hej" />
          <Switch>
            <PrivateRoute exact path="/" isAuthenticated component={Index} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </ErrorBoundary>
  )
}

export default hot(module)(App)
