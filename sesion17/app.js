const express = require('express');
const http = require('http')
const cors = require('cors');
const path = require('path')
const socketio = require('socket.io');

const app = express();

app.use(cors());

app.get('/', (req, res)=>{
    res.send("Hello World")
});

app.use(express.static(path.join(__dirname, 'public')))

const server = app.listen(3000, ()=>{
    console.log("http server running")
})

var messageCollection = []

const io = socketio(server)

io.on("connection", (socket) => {
    console.log("New Connection");

    socket.on('message', (data)=> {
        console.log(data);
        socket.emit('message', data.user + ': ' + data.message)
        socket.broadcast.emit('message', data.user + ': ' + data.message)
        messageCollection.push(data);
    })

    socket.on('joinToRoom', (username) => {
        socket.emit('message', 'Bienvenido ' + username);

        messageCollection.forEach((element) => {
            socket.emit('message', element.user + ': ' + element.message)
        })

        socket.broadcast.emit('message', username + ' se ha unido a la sala')
    })

    socket.on('onTyping', (username) => {
        socket.broadcast.emit('typing', username)
    })

})
 