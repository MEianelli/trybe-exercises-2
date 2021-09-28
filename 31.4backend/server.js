const cors = require('cors');
const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http,  {
  cors: {
    origin: 'http://localhost:3002',
    method: ['GET', 'POST', 'PUT']
  }
})

require('./sockets/chat')(io);

app.use(cors());

app.get('/', (_req,res) => {
  res.status(200).json({ message: 'Server ok'})
})

http.listen(3000, () => {
  console.log('Escutando na porta 3000')
})