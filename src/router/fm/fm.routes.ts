import { Router } from 'express';
import {
	fm_valid_client,
	valid_existin_client,
	fm_create_commerce,
	FM_create,
} from '../../controllers/FM_request/index';
import { validExistingClient, validClientData } from '../../Middlewares/data/auth';
import { validCommerceData } from '../../Middlewares/data/commerce';
import { validFmData } from '../../Middlewares/data/fm';

const FM: Router = Router();

// RC
//
FM.route('/FM/client').post(validClientData, fm_valid_client);
//
FM.route('/FM/:id/commerce').post(validCommerceData, fm_create_commerce);
//
FM.route('/FM').post(validFmData, FM_create);
//
FM.route('/FM').post(FM_create);
//
FM.route('/FM/client/valid').post(validExistingClient, valid_existin_client);

export default FM;
