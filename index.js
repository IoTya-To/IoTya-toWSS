const io = require('socket.io').listen(8080)
io.sockets.on('connection',(client)=>{
    console.log('hello~')
    //test
})
