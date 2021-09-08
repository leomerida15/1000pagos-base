import { Router } from 'express';
import { upload, uploads } from '../../Middlewares/upload/index';
import { upFileRecaudos, upFilesRecaudos } from '../../controllers/client/1000pagos.controllers';

const RC: Router = Router();

// RC
RC.route('/fm').post();
//
RC.route('/RC/:id').get(uploads, upFilesRecaudos);
//
export default RC;
