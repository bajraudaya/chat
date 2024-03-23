// Node server handling socket connection
const io = require('socket.io')(8000);

const users = {}; // Corrected variable name from 'user' to 'users'

io.on('connection', socket => {
    socket.on('new-user-joined', name => { // Corrected 'none' to 'name'
        console.log("new user", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        io.emit('receive', { message: message, name: users[socket.id] }); // Corrected 'socket.broadcast.emit' to 'io.emit'
    });
});
