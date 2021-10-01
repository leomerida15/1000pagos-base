import http from 'http';
import { Server } from 'socket.io';

import db, { InitDB } from '../db/json';

export default (httpServer: http.Server): void => {
	InitDB();

	const wss = new Server(httpServer, {
		cors: {
			origin: '*',
			methods: ['GET', 'POST'],
		},
	});

	wss.on('connection', (ws) => {
		ws.emit('list_diferidos', db.getData('/diferidos'));
	});
};
