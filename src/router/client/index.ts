import { Application } from 'express';
import commerce from './commerce.routes';

//
export default (app: Application) => {
	app.use('/client', commerce);
};
