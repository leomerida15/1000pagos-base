import { Router } from 'express';
import { upload, uploads } from '../../Middlewares/upload/index';
import { vlaid_client } from '../../controllers/auth/client';

const FM: Router = Router();

// RC
FM.route('/FM/client').post(vlaid_client);

export default FM;
