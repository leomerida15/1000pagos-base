import { Response, Request, NextFunction } from 'express';
import { Api } from 'interfaces';
import Resp from '../../Middlewares/res/resp';
import { getRepository } from 'typeorm';
import fm_roles from '../../db/models/fm_roles';
import { worker } from './worker';
import fm_worker from '../../db/models/fm_worker';

export const rolesAll = async (req: Request<any, Api.Resp>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const info = await getRepository(fm_roles).find();

		Resp(req, res, { message: 'data del usuario', info });
	} catch (err) {
		next(err);
	}
};

export const rolesByWorker = async (
	req: Request<Api.params, Api.Resp>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const { id } = req.params;
		const roles = await getRepository(fm_roles).find();

		const worker: any = await getRepository(fm_worker)
			.createQueryBuilder('fm_worker')
			.whereInIds([id])
			.leftJoinAndSelect('fm_worker.roles', 'roles')
			.getOne();

		const idsRolesWorker = worker.roles.map((rol: any) => rol.id);

		const info = roles.map((role: any) => {
			role.valid = idsRolesWorker.includes(role.id);

			return role;
		});

		Resp(req, res, { message: 'data del usuario', info });
	} catch (err) {
		next(err);
	}
};
