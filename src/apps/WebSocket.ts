import fm_request from '../db/models/fm_request';
import http from 'http';
import { Server } from 'socket.io';
import { getRepository, getConnection } from 'typeorm';
import Log from '../hooks/logs/index';

export let diferidos: any[];

export const refresh = async () => {
	const valid = await getRepository(fm_request).find();

	const fms = valid.length
		? await getConnection()
				.createQueryBuilder(fm_request, 'fm_request')
				.where('fm_request.id_status_request = 4')
				.leftJoinAndSelect('fm_request.id_client', 'fm_client')
				.leftJoinAndSelect('fm_request.id_commerce', 'fm_commerce')
				.getMany()
		: valid;

	diferidos = fms.map((fm: any) => {
		for (const key in fm) {
			if (!key.includes('valid')) continue;
			fm[key] = { status: fm[key] !== '', msg: fm[key] };
		}

		return fm;
	});
};

export default async (httpServer: http.Server): Promise<void> => {
	await refresh();
	Log.text.Info('Socket OK');
	//InitDB();

	const wss = new Server(httpServer, { cors: { origin: '*', methods: ['GET', 'POST'] } });

	wss.on('connection', (ws) => {
		ws.emit('list_diferidos', { diferidos });
	});
};
