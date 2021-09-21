import { Router } from 'express';

const Worker: Router = Router();

// controllers
import { rolesAll, rolesByWorker } from '../../controllers/auth/roles';

// ? roles
//
Worker.route('/roles/all').get(rolesAll);
//
Worker.route('/roles/:id/worker').get(rolesByWorker);

export default Worker;
