import { Application } from 'express';

// rputers
import auth from './auth';
import global from './global';
//
export default (app: Application) => {
	auth(app);
	global(app);
};
