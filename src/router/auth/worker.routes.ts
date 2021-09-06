import { Router } from 'express';

const Worker: Router = Router();

// controllers
import { workerByID, workerAll } from '../../controllers/auth/worker';

// ? Auth
//
Worker.route('/').get(workerByID);
//
Worker.route('/all').get(workerAll);

export default Worker;
