const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')
const { v4 } = require('uuid')
const md5 = require('md5')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const messages = [
  { id: v4(), text: 'Hej 👋', time: new Date(), user: { id: v4(), nick: 'bot', email: null, avatar: null } },
]

const users = [
  // { id: v4(), email: '' },
]

io.on('connection', (socket) => {
  console.log('client connected')

  socket.on('message', ({ message: text, user = {} }) => {
    console.log(`message ${text} from ${user.nick}`)

    const message = {
      id: v4(),
      time: new Date(),
      user,
      text,
    }

    messages.push(message)
    socket.emit('message', message)
    socket.broadcast.emit('message', message)
  })

  socket.on('user', ({ nick, email }) => {
    console.log(`user ${nick} connected`)

    const user = {
      nick,
      email,
      id: v4(),
      avatar: `https://gravatar.com/avatar/${md5(email)}`,
    }

    users.push(user)
    // socket.emit('user', user)
    socket.local.emit('user', user)
  })
})

nextApp.prepare().then(() => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())

  app.get('/messages', (req, res) => {
    res.json(messages)
  })

  app.get('/users', (req, res) => {
    res.json(users)
  })

  app.post('/user', (req, res) => {
    const { nickname, email } = req.body
    const user = {
      nickname,
      email,
      id: v4(),
      avatar: `https://gravatar.com/avatar/${md5(email)}`,
    }
    res.json(user)
  })

  app.get('*', (req, res) => nextHandler(req, res))

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
