import { getConnection, getRepository } from 'typeorm';
import db from '../../db/json/index';
import fm_request from '../../db/models/fm_request';

export const getAllDiferidos = async (): Promise<void> => {
	// console.log(db.getData('/'));
	// const inDB: any[] = db.getData('/');
	// const ids: any[] = inDB.map((request: fm_request) => request.id);
	// const request = await getConnection()
	// 	.createQueryBuilder()
	// 	.from(fm_request, 'fm_request')
	// 	.where('fm_request.id NOT IN (:ids)', { ids })
	// 	.getMany();
	// db.push('/diferidos', inDB.concat(request));
};
