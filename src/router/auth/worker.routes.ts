import { Router } from 'express';

const Worker: Router = Router();

// controllers
import { workerAll, worker, workerById } from '../../controllers/auth/worker';

// ? worker
//
Worker.route('/').get(worker);
//
Worker.route('/all').get(workerAll);
//
Worker.route('/:id').get(workerById);

export default Worker;
