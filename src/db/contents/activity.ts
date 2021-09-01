import Log from 'hooks/logs';
import { getRepository } from 'typeorm';
import fm_worker from '../models/fm_worker';
import fm_activity from '../models/fm_activity';

const activity = async (): Promise<void> => {
	const data: fm_activity[] = [
		{
			name: 'test',
		},
	];

	//
	const valid = await getRepository(fm_activity).find({ where: data });
	if (!valid.length) await getRepository(fm_activity).save(data);
};

export default activity;
