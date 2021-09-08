import { Router } from 'express';

const Worker: Router = Router();

// controllers
import { workerAll, worker, workerById } from '../../controllers/auth/worker';

// ? worker
//
Worker.route('/worker/').get(worker);
//
Worker.route('/worker/all').get(workerAll);
//
Worker.route('/worker/:id').get(workerById);

export default Worker;
