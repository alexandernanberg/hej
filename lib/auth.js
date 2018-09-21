import cookie from 'cookie'
import { WebAuth } from 'auth0-js'
import { parseCookies } from './utils'

class Auth {
  webAuth = new WebAuth({
    domain: 'nanberg.eu.auth0.com',
    clientID: 'QU1uKytWUKpyiG9lv0mSvZ2P6q2o4IKZ',
    redirectUri:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000/confirm'
        : 'https://hej.now.sh/confirm',
    responseType: 'token',
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
    const cookies = parseCookies(context)
    const expiresAt = JSON.parse(cookies.expires_at || 0)
    return new Date().getTime() < expiresAt
  }

  setSession = (authResult) => {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    )
    document.cookie = cookie.serialize('access_token', authResult.accessToken, {
      maxAge: 31556926,
    })
    document.cookie = cookie.serialize('id_token', authResult.idToken, {
      maxAge: 31556926,
    })
    document.cookie = cookie.serialize('expires_at', expiresAt, {
      maxAge: 31556926,
    })
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
    document.cookie = cookie.serialize('access_token', '', {
      maxAge: -1,
    })
    document.cookie = cookie.serialize('id_token', '', {
      maxAge: -1,
    })
    document.cookie = cookie.serialize('expires_at', '', {
      maxAge: -1,
    })

    window.location.reload()
  }
}

export default new Auth()
