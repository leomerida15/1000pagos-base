import { Application } from 'express';

// rputers
import auth from './auth';
import client from './client';

//
export default (app: Application) => {
	auth(app);
	client(app);
};
