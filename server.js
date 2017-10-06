const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')
const { v4 } = require('uuid')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const messages = [
  { id: v4(), text: 'Hej 👋', time: new Date() },
]

const users = [
  // { id: v4(), email: '' },
]

io.on('connection', (socket) => {
  console.log('client connected')

  socket.on('message', (text) => {
    console.log('new message', text)

    const message = {
      id: v4(),
      time: new Date(),
      text,
    }

    messages.push(message)
    socket.emit('message', message)
  })
})

nextApp.prepare().then(() => {
  app.get('/messages', (req, res) => {
    res.json(messages)
  })

  app.get('/users', (req, res) => {
    res.json(users)
  })

  app.get('*', (req, res) => nextHandler(req, res))

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
