import http from 'http';
import { Server } from 'socket.io';
import { Application } from 'express';

export default (app: Application) => {
	const server = http.createServer(app);
	const io = new Server(server);

	io.on('connection', (socket) => {
		console.log('a user connected');
	});
};
