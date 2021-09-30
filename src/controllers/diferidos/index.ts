import { getRepository } from 'typeorm';
import db from '../../db/json/index';
import fm_request from '../../db/models/fm_request';

export const getAllDiferidos = async (): Promise<string[]> => {
	const inDB: fm_request[] = db.getDate('/diferidos');
	const ids: any[] = inDB.map((request: fm_request) => request.id);

	const request = await getRepository(fm_request).find({ where: { id: { not: ids }, id_status_request: 4 } });

	db.push('/diferidos', inDB.concat(request));

	// return db.getData('/diferidos');
	return ['socket conectado'];
};
