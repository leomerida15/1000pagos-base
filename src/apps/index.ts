// Modules
import express, { Application, Request, Response } from 'express';
import { posRoutes, preRoutes } from '../Middlewares';
import Routes from '../router';

import { createConnection } from 'typeorm';

createConnection({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '',
	database: 'test',
})
	.then(() => console.log('DB OK'))
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
