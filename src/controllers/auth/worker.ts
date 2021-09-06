import { Response, Request, NextFunction } from 'express';
import { Api } from 'interfaces';
import respOk from '../../Middlewares/token/respOk';
import { getRepository } from 'typeorm';
import fm_worker from '../../db/models/fm_worker';

export const workerByID = async (
	req: Request<any, Api.resp>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const { id, type }: any = req.headers.token;

		console.log('id', id);

		if (type === 2) throw { message: 'no esta tiene permiso de consumir enta data' };
		const worker = await getRepository(fm_worker).findOne({ id });

		const { password, ...info }: any = worker;

		respOk(req, res, { message: 'data del usuario', info });
	} catch (err) {
		next(err);
	}
};

export const workerAll = async (req: Request<any, Api.resp>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const worker = await getRepository(fm_worker)
			.createQueryBuilder('fm_worker')
			.leftJoinAndSelect('fm_worker.roles', 'roles')
			.getMany();

		const { password, ...info }: any = worker;

		respOk(req, res, { message: 'data del usuario', info: worker });
	} catch (err) {
		next(err);
	}
};
