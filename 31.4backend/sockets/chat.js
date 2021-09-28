module.exports = (io) => io.on('connection', (socket) => {
  socket.on('clientMessage', message => {
    console.log(message);
    io.emit('serverMessage', message);
  })
});