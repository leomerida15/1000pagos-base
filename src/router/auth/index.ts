import { Application } from 'express';
import Worker from './worker.routes';
import roles from './roles.routes';
import Auth from './auth.routes';

//
export default (app: Application) => {
	app.use('/auth', Auth);
	app.use('/worker', Worker);
	app.use('/roles', roles);
};
