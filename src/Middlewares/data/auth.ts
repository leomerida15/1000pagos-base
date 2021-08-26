import { check, oneOf, ValidationChain } from 'express-validator';
import { NoSQL } from './index';
import { getRepository } from 'typeorm';
import fm_Client from '../../db/models/fm_client';

export const RegisterData: ValidationChain[] = [
	//
	check('name', 'nombre invalido').exists({ checkFalsy: true, checkNull: true }).isAlpha().custom(NoSQL),
	//
	check(
		'password',
		'la contraseña debe tener 1 numero, 1 minuscula, 1 mayuscula, 1 simbolo y un minimo de 6 caracteres'
	)
		.exists({ checkFalsy: true, checkNull: false })
		.isStrongPassword({ minLength: 6, minNumbers: 1, minUppercase: 1, minSymbols: 1 })
		.custom(NoSQL),
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
	check('phone1', 'telefono 1 invalido').isString().custom(NoSQL),
	//
	check('phone2', 'telefono 2 invalido').isString().custom(NoSQL),
	//
	check('email', 'el correo no es valido').exists({ checkFalsy: true, checkNull: true }).isEmail().custom(NoSQL),
];

export const RegisterData1: ValidationChain[] = [
	//
	check('email', 'el correo no es valido')
		.exists({ checkFalsy: true, checkNull: true })
		.normalizeEmail()
		.isEmail()
		.custom(NoSQL)
		.custom(async (email: string) => {
			const resp = await getRepository(fm_Client).findOne({ where: { email } });

			return resp ? false : true;
		}),
];

export const RegisterData2: ValidationChain[] = [
	//
	check('id_ident_type', 'el tipo de documento de identidad no es valido')
		.exists({ checkFalsy: true, checkNull: true })
		.isNumeric()
		.custom(NoSQL),
	//
	check('ident_num', 'el numero de documento de identidad no es valido')
		.exists({ checkFalsy: true, checkNull: true })
		.isLength({ min: 6, max: 20 })
		.isNumeric()
		.custom(NoSQL),
];
