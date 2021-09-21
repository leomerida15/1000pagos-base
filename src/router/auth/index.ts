import { Application } from 'express';
import Worker from './worker.routes';
import roles from './roles.routes';
import Auth from './auth.routes';

//
export default (app: Application) => {
	app.use('/auth', Auth);
	app.use(Worker);
	app.use(roles);
};
