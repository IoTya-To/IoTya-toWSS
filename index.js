const io = require('socket.io').listen(8080)
io.sockets.on('connection', (socket) => {
    console.log(socket.id)
    console.log(socket.rooms)
    socket.on('message', (message) => {
        console.log(message)
        socket.emit('echo', message)
    })
    socket.on('disconnect', (reason) => {
        console.log(socket.id + ' disconnected  : ' + reason)
    })
})
