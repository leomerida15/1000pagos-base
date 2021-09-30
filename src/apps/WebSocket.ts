import http from 'http';
import { Server } from 'socket.io';

import { InitDB } from '../db/json';
import { getAllDiferidos } from '../controllers/diferidos/index';

export default (httpServer: http.Server): void => {
	InitDB();

	const wss = new Server(httpServer);

	wss.on('connection', (ws) => {
		ws.emit('diferidos', getAllDiferidos);
	});
};
