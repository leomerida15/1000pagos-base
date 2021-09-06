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
		const { id, id_roles }: any = req.headers.token;
		console.log(req.headers.token);

		const worker = await getRepository(fm_worker).findOne({ id, id_roles });
		console.log(worker);

		const { password, ...info }: any = worker;

		res.status(200).json({ message: 'data del usuario', info });
	} catch (err) {
		next(err);
	}
};
