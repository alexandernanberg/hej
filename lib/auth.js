import Cookies from 'js-cookie'
// import { WebAuth } from 'auth0-js'

// const webAuth = new WebAuth({
//   domain: 'nanberg.eu.auth0.com',
//   clientID: 'QU1uKytWUKpyiG9lv0mSvZ2P6q2o4IKZ',
//   redirectUri: 'http://localhost:3000/login',
//   responseType: 'token',
//   scope: 'openid profile',
// })

// webAuth.passwordlessStart(
//   {
//     connection: 'email',
//     send: 'link',
//     email: values.email,
//   },
//   (err, res) => {
//     console.log(err)
//     console.log(res)
//     // handle errors or continue
//   },
// )

export function login({ username, email }) {
  console.log(username, email)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'error') {
        reject()
      }

      Cookies.set('auth', true)
      resolve()
    }, 1000)
  })
}

export function logout() {}
