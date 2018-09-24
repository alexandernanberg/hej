require('now-env')
const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')
const nanoid = require('nanoid')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

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

  app.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
