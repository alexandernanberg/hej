import { WebAuth } from 'auth0-js'
import Cookies from 'js-cookie'
import { parseCookies } from './utils'

class Auth {
  webAuth = new WebAuth({
    domain: 'nanberg.eu.auth0.com',
    clientID: 'QU1uKytWUKpyiG9lv0mSvZ2P6q2o4IKZ',
    redirectUri:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000/confirm'
        : 'https://hej.now.sh/confirm',
    responseType: 'token id_token',
    scope: 'openid profile',
  })

  parseHash(hash) {
    return new Promise((resolve, reject) => {
      this.webAuth.parseHash({ hash }, (err, authResult) => {
        if (err) {
          reject(err)
        }

        resolve(authResult)
      })
    })
  }

  isAuthenticated = (context) => {
    const cookies = context ? parseCookies(context) : Cookies.get()
    const expiresAt = JSON.parse(cookies.expires_at || 0)
    return new Date().getTime() < expiresAt
  }

  setSession = (authResult) => {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    )
    console.log(authResult)
    Cookies.set('access_token', authResult.accessToken, { expires: 365 })
    Cookies.set('id_token', authResult.idToken, { expires: 365 })
    Cookies.set('expires_at', expiresAt, { expires: 365 })
  }

  login({ email }) {
    return new Promise((resolve, reject) => {
      this.webAuth.passwordlessStart(
        {
          connection: 'email',
          send: 'link',
          email,
        },
        (err, res) => {
          if (err) {
            reject(err)
          }

          resolve(res)
        },
      )
    })
  }

  logout = () => {
    Cookies.remove('access_token')
    Cookies.remove('id_token')
    Cookies.remove('expires_at')

    window.location.reload()
  }
}

export default new Auth()
