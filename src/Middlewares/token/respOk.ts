import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Api } from 'interfaces';
const Key: string = process.env.KEY || '_secreto';

const respOk = (req: Request<any, Api.resp>, res: Response<Api.resp>, msg: Api.resp<any>) => {
	// msg.token = msg.token ? jwt.sign(token, Key, { expiresIn: 60 * 30 }) : msg.token;

	msg.token = (() => {
		if (!msg.token) {
			const { id, type }: any = req.headers.token;
			return jwt.sign({ id, type }, Key, { expiresIn: '1h' });
		} else {
			return msg.token;
		}
	})();

	res.status(200).json(msg);
};

export default respOk;
