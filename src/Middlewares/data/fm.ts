import { check, oneOf, ValidationChain } from 'express-validator';
import { NoSQL } from './index';
import fm_request from '../../db/models/fm_request';

export const ProductData: ValidationChain[] = [
	//
	check('text_account_number', 'nombre invalido')
		.exists({ checkFalsy: true, checkNull: true })
		.isSemVer()
		.custom(NoSQL),
	//

	// validar la data del cliente
	//
	check('name', 'nombre invalido').exists({ checkFalsy: true, checkNull: true }).isAlpha().custom(NoSQL),
	//
	check('last_name', 'nombre invalido').exists({ checkFalsy: true, checkNull: true }).isAlpha().custom(NoSQL),
	//
	check('id_ident_type', 'el tipo de documento de identidad no es valido')
		.exists({ checkFalsy: true, checkNull: true })
		.isNumeric({ no_symbols: true })
		.custom(NoSQL),
	//
	check('ident_num', 'el numero de documento de identidad no es valido')
		.exists({ checkFalsy: true, checkNull: true })
		.isLength({ min: 6, max: 20 })
		.isNumeric({ no_symbols: true })
		.custom(NoSQL),
	//
	check('phone', 'telefono invalido').isString().custom(NoSQL),
	//
	check('email', 'el correo no es valido').exists({ checkFalsy: true, checkNull: true }).isEmail().custom(NoSQL),
];
