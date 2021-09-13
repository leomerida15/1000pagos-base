import { Router } from 'express';
import { getAllIdent_type } from '../../controllers/global/ident_type';

const Ident_type: Router = Router();

// controllers

// ? Ident_type
//
Ident_type.route('/ident_type').get(getAllIdent_type);

export default Ident_type;
