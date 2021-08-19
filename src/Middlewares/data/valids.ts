import { body, validationResult, oneOf } from 'express-validator';

interface validObj {
	path: { route: string; method: string };
	valids: any[];
}

const NoSQL = (v: any): boolean => !['SELECT', 'DELETE', 'INSERT', 'UPDATE', 'WHERE', 'DROP', 'add'].includes(v);

export const register: validObj = {
	path: { route: '/auth/register', method: 'POST' },
	valids: [
		//
		body('name', 'numbre invalido').exists().custom(NoSQL),
		//
		body('id_roles', 'rol invalido').exists().isNumeric().custom(NoSQL),
		//
		body('password', 'la contraseña de be tener un rango de 6 a 10 caracteres')
			.exists()
			.isLength({ min: 6, max: 10 })
			.custom(NoSQL),
		//
		body('id_ident_type', 'el tipo de documento de identidad no es valido').exists().isNumeric().custom(NoSQL),
		//
		body('nro_ident', 'el numero de docuem tno de identidad no es valido')
			.exists()
			.isLength({ min: 6, max: 10 })
			.isNumeric()
			.custom(NoSQL),
		//
		body('id_depart', 'el departamento no es valido').exists().isNumeric().custom(NoSQL),
		//
		body('email', 'el correo no es valido').exists().isEmail().custom(NoSQL),
	],
};
