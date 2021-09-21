import { Router } from 'express';
import {
	fm_valid_client,
	valid_existin_client,
	fm_create_commerce,
	FM_create,
} from '../../controllers/FM_request/index';
import { validExistingClient } from '../../Middlewares/data/auth';

const FM: Router = Router();

// RC
//
FM.route('/FM/client').post(fm_valid_client);
//
FM.route('/FM/:id/commerce').post(fm_create_commerce);
//
<<<<<<< HEAD
FM.route('/FM').post(FM_create);
//
=======
>>>>>>> bb5d658a0c117c6aac267125e0c31f1f5cf90e61
FM.route('/FM/client/valid').post(validExistingClient, valid_existin_client);

export default FM;
