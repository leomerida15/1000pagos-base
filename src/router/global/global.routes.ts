import { Router } from 'express';
import { getAllIdent_type, getAllActivity } from '../../controllers/global';

const Ident_type: Router = Router();

// controllers

// ? Ident_type
//
Ident_type.route('/ident_type').get(getAllIdent_type);

// ? activity
//
Ident_type.route('/activity').get(getAllActivity);

export default Ident_type;
