const io = require('socket.io').listen(8080)
let sockets = []
io.sockets.on('connection', (socket) => {
    sockets.push(socket.id)
    sockets.forEach(arr => console.log(arr))
    console.log(socket.id + 'is connected')    
    console.log('Client:'+sockets.length)
    socket.on('message', (message) => {
        console.log(message)
        socket.broadcast.emit('ServerMessage', message)
    })
    socket.on('createRoom', (roomname) => {
        console.log(socket.id+" Created room #" +roomname)
        socket.join(roomname)
        socket.emit('ServerMessage', 'you joined ' + roomname)
    })
    socket.on('pushData',(data)=>{
        socket.to(data.room).broadcast.emit(data.data)
    })
    socket.on('disconnect', (reason) => {
        console.log(socket.id + ' disconnect : ' + reason)
        sockets = sockets.filter(sc => sc!==socket.id)
        console.log('Client:'+sockets.length)
    })
})
