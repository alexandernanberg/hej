const express = require('express')
const http = require('http')
const socketServer = require('socket.io')
const next = require('next')
const nanoid = require('nanoid')
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

io.on('connection', (socket) => {
  socket.on('confirm', () => {
    socket.broadcast.emit('confirm')
  })

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
})

nextApp.prepare().then(() => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(cors())

  app.get('/messages', (req, res) => {
    res.json(messages)
  })

  app.get('*', (req, res) => nextHandler(req, res))

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
