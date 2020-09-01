const io = require('socket.io').listen(8080)
io.sockets.on('connection', (socket) => {
    console.log(socket.id + 'is connected')
    socket.on('message', (message) => {
        console.log(message)
        socket.broadcast.emit('ServerMessage', message)
    })
    socket.on('roomRequest', (roomname) => {
        socket.join(roomname)
        socket.emit('ServerMessage', 'you joined ' + roomname)
    })
    socket.on('rm', (arg) => {
        const args = arg.split(',')
        io.to(args[0]).emit('ServerMessage', 'roomMassage : ' + args[1])
    })
    socket.on('disconnect', (reason) => {
        console.log(socket.id + ' disconnect : ' + reason)
    })
})
