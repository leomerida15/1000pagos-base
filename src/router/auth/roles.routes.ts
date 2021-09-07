import { Router } from 'express';

const Worker: Router = Router();

// controllers
import { rolesAll } from '../../controllers/auth/roles';

// ? roles
//
Worker.route('/all').get(rolesAll);

export default Worker;
