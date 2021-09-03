import Log from 'hooks/logs';
import { getRepository } from 'typeorm';
import fm_worker from '../models/fm_worker';

const worker = async (): Promise<void> => {
	const data: fm_worker[] = [
		{
			id: 0,
			name: 'no commerce',
			last_name: 'no commerce',
			id_roles: 1,
			password: '',
			email: 'null',
			id_depart: 1,
			id_ident_type: 1,
			ident_num: '',
			id_company: 1,
			phone: '',
		},
	];

	//
	const valid = await getRepository(fm_worker).find({ where: [{ name: 'no commerce' }] });
	if (!valid.length) await getRepository(fm_worker).save(data);
};

export default worker;
