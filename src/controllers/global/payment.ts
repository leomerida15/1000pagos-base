import { NextFunction, Request, Response } from 'express';
import respOk from '../../Middlewares/token/respOk';
import { getRepository } from 'typeorm';
import fm_payment_method from '../../db/models/fm_payment_method';
import { Api } from 'interfaces';

export const paymentAll = async (
	req: Request<any, Api.resp>,
	res: Response<Api.resp>,
	next: NextFunction
): Promise<void> => {
	try {
		const info = await getRepository(fm_payment_method).find();

		respOk(req, res, { message: 'formas de pago', info });
	} catch (err) {
		next(err);
	}
};
