import { Application } from 'express';

// rputers
import auth from './auth';
import FM from './fm';
import global from './global';
import Socket from './web';
//
export default (app: Application) => {
	auth(app);
	global(app);
	FM(app);
	//
	Socket(app);
};
