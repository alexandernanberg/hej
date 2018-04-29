import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Loadable from 'react-loadable'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import { LoadingScreen } from '../components/common/Loader'
import { injectGlobalStyle } from '../style'

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
  loading: LoadingScreen,
})

const App = () => {
  injectGlobalStyle()

  return (
    <Router>
      <Fragment>
        <Helmet titleTemplate="%s - Hej" defaultTitle="Hej" />
        <Switch>
          <ProtectedRoute exact path="/" isAuthenticated component={Index} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default hot(module)(App)
