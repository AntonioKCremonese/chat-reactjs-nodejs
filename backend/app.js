const express = require('express');
const socket = require('socket.io');
const cors = require('cors');
const app = express();

server = app.listen(8080, console.log('server running on port 8080'));

io = socket(server);

io.on('connection', socket => {
    console.log(socket.id);
    socket.on('SEND_MESSAGE', data => {
        io.emit('RECEIVE_MESSAGE',data);
    })
})
app.use(express.json());
app.use(cors());
app.use(require('./routes/routes'));
