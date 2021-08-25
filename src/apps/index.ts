// Modules
import express, { Application, Request, Response } from 'express';
import { posRoutes, preRoutes } from '../Middlewares';
import Routes from '../router';

import { Connection, createConnection, getRepository } from 'typeorm';
import fm_clinet from '../entity/clinet';

<<<<<<< HEAD
createConnection()
	.then(() => console.log('DB OK'))
=======
createConnection({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '',
	database: 'test2',
})
	.then((conet: any) => {
		conet.getRepository(fm_clinet);
		console.log('DB OK');
	})
>>>>>>> 4c971058318fd3dac72dec100ae379e3498f7d85
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
