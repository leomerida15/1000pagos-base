import fm_request from '../models/fm_request';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import { getConnection, getRepository } from 'typeorm';

let db: any = [];

export const InitDB = async () => {
	db = new JsonDB(new Config('src/db/json/diferidos', true, false, '/src/db/json'));
	if (!db.getData('/').diferidos) db.push('/', { diferidos: [] });

	if (!db.getData('/diferidos').length) {
		const inDB: any[] = db.getData('/diferidos');

		const request = await getRepository(fm_request).find({ id_status_request: 4 });

		if (request.length) db.push('/diferidos', [...request, ...inDB]);
	}
};

export default db;
