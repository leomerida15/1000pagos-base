import { NextFunction, Request, Response } from 'express';

import * as valids from './valids';

export default (req: Request, res: Response, next: NextFunction) => {
	console.log('hola');

	const resp: any = Object.keys(valids)
		.filter((key: string) => {
			// @ts-expect-error
			const item = valids[key].path;
			console.log('item.route == req.originalUrl && item.method == req.method;');
			console.log(`${item.route} == ${req.originalUrl} && ${item.method} == ${req.method};`);

			return item.route == req.originalUrl && item.method == req.method;
		})
		.map((key: string) => {
			// @ts-expect-error
			const item = valids[key].path;

			return item.valids;
		});

	console.log('resp', resp);

	return resp.valids;
};
