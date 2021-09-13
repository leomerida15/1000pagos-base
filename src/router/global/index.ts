import { Application } from 'express';

// rputers
import location from './location.routes';
import Payments from './paymed.routes';
import Ident_type from './ident_type.routes';

//
export default (app: Application) => {
	app.use(location);
	app.use(Ident_type);
	app.use(Payments);
};
