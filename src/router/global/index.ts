import { Application } from 'express';

// rputers
import location from './location.routes';
import Payments from './paymed.routes';

//
export default (app: Application) => {
	app.use(location);
	app.use(Payments);
};
