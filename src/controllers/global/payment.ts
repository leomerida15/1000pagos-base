import { NextFunction, Request, Response } from 'express';
import Resp from '../../Middlewares/res/resp';
import { getRepository } from 'typeorm';
import fm_payment_method from '../../db/models/fm_payment_method';
import { Api } from 'interfaces';

export const paymentAll = async (
	req: Request<any, Api.Resp>,
	res: Response<Api.Resp>,
	next: NextFunction
): Promise<void> => {
	try {
		const info = await getRepository(fm_payment_method).find();

		Resp(req, res, { message: 'formas de pago', info });
	} catch (err) {
		next(err);
	}
};
