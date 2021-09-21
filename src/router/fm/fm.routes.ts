import { Router } from 'express';
import { fm_valid_client, valid_existin_client, fm_create_commerce } from '../../controllers/FM_request/index';
import { validExistingClient } from '../../Middlewares/data/auth';

const FM: Router = Router();

// RC
//
FM.route('/FM/client').post(fm_valid_client);
//
FM.route('/FM/:id/commerce').post(fm_create_commerce);
//
FM.route('/FM/client/valid').post(validExistingClient, valid_existin_client);

export default FM;
