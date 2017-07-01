const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const messages = [
  { id: Date.now(), text: 'Hej 👋', time: new Date() },
]

const userCount = 0;

io.on('connection', socket => {
  let addedUser = false;

  socket.on('new message', (data) => {
    messages.push(data)
    socket.broadcast.emit('message', data)
  })

  socket.on('add user', (username) => {
    if (addedUser) return

    socker.username = username
    userCount =+ 1

    socket.emit('login', {
      userCount
    });

    socket.broadcast.emit('user joined', {
      username: socket.username,
      userCount
    });
  })

  socket.on('start type', (data) => {

  })

  socket.on('disconnect', function () {
    if (addedUser) {
      userCount =- 1;

      socket.broadcast.emit('user left', {
        username: socket.username,
        userCount
      });
    }
  });
})

nextApp.prepare().then(() => {
  app.get('/messages', (req, res) => {
    res.json(messages)
  })

  app.get('/users', (req, res) => {
    res.json(users)
  })

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
