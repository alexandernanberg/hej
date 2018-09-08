const express = require('express')
const http = require('http')
const socketServer = require('socket.io')
const next = require('next')
const nanoid = require('nanoid')
const md5 = require('md5')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const server = http.Server(app)
const io = socketServer(server)
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const messages = []
const users = []

io.on('connection', (socket) => {
  console.log('client connected')

  socket.on('message', ({ message: content, user = {} }) => {
    console.log(`message ${content} from ${user.nickname}`)

    const message = {
      id: nanoid(),
      time: Date.now(),
      user,
      content,
    }

    messages.push(message)
    socket.emit('message', message)
    socket.broadcast.emit('message', message)
  })

  socket.on('user', ({ nickname, email }) => {
    console.log(`user ${nickname} connected`)

    const user = {
      nickname,
      email,
      id: nanoid(),
      avatar: `https://gravatar.com/avatar/${md5(email)}`,
    }

    console.log(user)

    // users.push(user)
    // socket.emit('user', user)
    // socket.local.emit('user', user)
  })
})

nextApp.prepare().then(() => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(cors())

  app.get('/messages', (req, res) => {
    res.json(messages)
  })

  app.get('/users', (req, res) => {
    res.json(users)
  })

  app.get('/user', (req, res) => {
    const { id } = req.query
    const user = users.find(u => u.id === id)

    if (!user) {
      res.json({ error: 'User does not exist' })
    }

    res.json(user)
  })

  app.post('/user', (req, res) => {
    const { nickname, email } = req.body
    const user = {
      nickname,
      email,
      id: nanoid(),
      avatar: `https://gravatar.com/avatar/${md5(email)}`,
    }

    users.push(user)
    res.json(user)
  })

  app.get('*', (req, res) => nextHandler(req, res))

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
