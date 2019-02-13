const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));

	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user has joined you!'));
	// socket.emit from Admin text Welcome to the chat app
	// scoket.broadcast.emit from Admin text New user joined 

	socket.on('createMessage', (message, callback) => {
		console.log('createMessage', message);
		io.emit('newMessage', generateMessage(message.from, message.text));
		callback('This is from the server');
		// socket.broadcast.emit('newMessage', {
		// 	from: createdMessage.from,
		// 	text: createdMessage.text,
		// 	createdAt: new Date().getTime()
		// });
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