const io = require('socket.io-client')
const socket = io('http://localhost:8080', {
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    randomizationFactor: 0.5
})
socket.on('connect', () => {
    console.log(socket.connected)
    socket.emit('message', 'hello from js')
})
