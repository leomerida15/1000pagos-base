import { Response, Request, NextFunction } from 'express';
import { Api } from 'interfaces';
import { getRepository } from 'typeorm';
import fm_worker from '../../db/models/fm_worker';

export const workerByID = async (
	req: Request<any, Api.resp>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const { id, id_role }: any = req.headers.token;

		const user = await getRepository(fm_worker).findOne({ where: { id, id_role } });
		const { password, ...info }: any = user;

		res.status(200).json({ message: 'data del usuario', info });
	} catch (err) {
		next(err);
	}
};
