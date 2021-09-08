import { Response, Request, NextFunction } from 'express';
import { Api } from 'interfaces';
import respOk from '../../Middlewares/token/respOk';
import { getRepository } from 'typeorm';
import fm_worker from '../../db/models/fm_worker';

export const worker = async (req: Request<any, Api.resp>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id, type }: any = req.headers.token;

		if (type === 1) throw { message: 'no esta tiene permiso de consumir enta data' };
		const worker = await getRepository(fm_worker).findOne(id);

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

		const info: any[] = worker.map((item: any) => {
			const { password, ...data }: any = worker;

			return data[0];
		});

		respOk(req, res, { message: 'data del usuario', info });
	} catch (err) {
		next(err);
	}
};

export const workerById = async (
	req: Request<Api.params, Api.resp>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const { id }: any = req.params;

		const worker = await getRepository(fm_worker)
			.createQueryBuilder('fm_worker')
			.whereInIds([id])
			.leftJoinAndSelect('fm_worker.roles', 'roles')
			.getMany();

		const { password, ...data }: any = worker;

		const info = data[0];

		respOk(req, res, { message: 'data del usuario', info });
	} catch (err) {
		next(err);
	}
};
