// Modules
import express, { Application, Request, Response } from 'express';
import { posRoutes, preRoutes } from '../Middlewares';
import Routes from '../router';

import { createConnection, getRepository } from 'typeorm';
import fm_ident_type from '../db/models/fm_ident_type';

createConnection()
	.then(() => {
		(async () => {
			const data: fm_ident_type[] = [
				{
					name: 'V',
				},
				{
					name: 'E',
				},
				{
					name: 'J',
				},
				{
					name: 'R',
				},
				{
					name: 'P',
				},
			];
			//
			const valid = await getRepository(fm_ident_type).find({ where: data });
			if (!valid.length) await getRepository(fm_ident_type).save(data);
		})();
		console.log('DB OK');
	})
	.catch((err) => console.log('DB ERR', err));

const app: Application = express();

//database

// middleware preRoutes
preRoutes(app);
app.use(express.json());

// Routes
Routes(app);

// meddleware posRutes
posRoutes(app);

// Settings
app.set('port', process.env.PORT || 5050);

export default app;
