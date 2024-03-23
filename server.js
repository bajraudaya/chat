const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// const { Server } = require('socket.io');

app.use(express.static('public')); // Serve static files (e.g., HTML, CSS, JS)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Replace witxh your HTML file path
});

// const io = new Server(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', {id: socket.id,  message: msg});
    });
});

http.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
