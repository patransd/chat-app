const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', {
		from: 'Elli1',
		text: 'still love you',
		createdAt: 1234
	});

	socket.on('createMessage', (createdMessage) => {
		console.log('createMessage', createdMessage);
	});

	socket.on('disconnect', () => {
		console.log('Disconnected from server');
	});
});

server.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});


console.log(__dirname + '/../public');
console.log(publicPath);