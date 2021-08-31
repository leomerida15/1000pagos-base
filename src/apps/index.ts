// Modules
import express, { Application, Request, Response } from 'express';
import { posRoutes, preRoutes } from '../Middlewares';
import Routes from '../router';

import { createConnection, getRepository } from 'typeorm';
import contents from '../db/contents';
import { Doc } from '../hooks/docs';

//database

createConnection()
	.then(async () => {
		await contents();
		console.log('DB OK');
	})
	.catch((err) => console.log('DB ERR', err));

const app: Application = express();

// middleware preRoutes
preRoutes(app);
app.use(express.json());

// Routes
Routes(app);

//
app.use('/static/*', express.static(Doc.base + '*'));

// meddleware posRutes
posRoutes(app);

// Settings
app.set('port', process.env.PORT || 4040);

export default app;
