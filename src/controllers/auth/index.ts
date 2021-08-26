// modules
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';
const key: string = '_secreto';

import { getRepository } from 'typeorm';

// services and hooks and personal interface
import { Api, DB } from '../../interfaces';
import { mail } from '../../services';

// db talbes
import fm_client from '../../db/models/fm_client';
import fm_phone from '../../db/models/fm_phone';

// getter a Client
export const register = async (
	req: Request<any, Api.resp, DB.Client>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		let i: number = 0;
		console.log('------|>> ' + i++);

		validationResult(req).throw();

		const { password, phone1, phone2 }: any = req.body;

		console.log('------|>> ' + i++);
		// encript password
		const salt: string = await bcrypt.genSalt(10);
		req.body.password = await bcrypt.hash(password, salt);

		console.log('------|>> ' + i++);
		const Client: any = getRepository(fm_client).create(req.body);
		console.log('Client');
		console.log(Client);

		const resp: fm_client = await getRepository(fm_client).save(Client);

		// enviar correo de validacion
		await mail.verify(Client);

		console.log('------|>> ' + i++);

		const token = jwt.sign({ id: resp.id }, key, { expiresIn: '3h' });

		console.log('------|>> ' + i++);

		const phones: Promise<void>[] = [phone1, phone2].map(async (phone: string): Promise<void> => {
			const item: any = getRepository(fm_phone).create({ phone, id_client: resp.id });

			console.log('item');
			console.log(item);

			await getRepository(fm_client).save(item);
		});
		await Promise.all(phones);

		console.log('------|>> ' + i++);

		// response
		res.status(200).json({ message: 'Usuario registrado Revise su correo por favor', info: { token } });
	} catch (err) {
		next(err);
	}
};

// register valid 1
export const registerValid1 = (req: Request, res: Response, next: NextFunction): void => {
	try {
		validationResult(req).throw();
		res.status(200).json({ message: 'ok' });
	} catch (err) {
		next(err);
	}
};

// register valid 1
export const registerValid2 = async (
	req: Request<any, Api.resp, fm_client>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		validationResult(req).throw();

		const { id_ident_type, ident_num } = req.body;

		// validar existencia de la clave cumpuesta
		const Client = await getRepository(fm_client).findOne({ id_ident_type, ident_num });
		if (Client) throw { message: 'el documento de identidad ya existe' };

		res.status(200).json({ message: 'ok' });
	} catch (err) {
		next(err);
	}
};

// getter a Client
export const login = async (
	req: Request<any, Api.resp, fm_client>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const { password, email }: any = req.body;

		// encript password
		const Client: any = await getRepository(fm_client).findOne({ where: { email } });

		const validPassword = await bcrypt.compare(password, Client.password);
		if (!validPassword) throw { message: 'contraseña incorrecta', code: 400 };

		const token = jwt.sign({ id: Client.id }, key);

		// response
		res.status(200).json({ message: 'Usuario logeado con exito', info: { token } });
	} catch (err) {
		next(err);
	}
};

// this function is for emit a mail for edit a password
export const passMail = async (
	req: Request<any, Api.resp, fm_client>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		// define email
		const { email }: any = req.body;
		// query for valid email
		const Client = await getRepository(fm_client).findOne({ where: { email } });
		if (!Client) throw { message: `El correo ${email} no se encuentra registrado en la plataforma`, code: 400 };

		// emit mail
		await mail.newPass(Client);

		// response
		res.status(200).json({ message: 'Le hemos enviado un correo electrónico para recuperar su contraseña' });
	} catch (err) {
		next(err);
	}
};

// editar usuarios
export const editPass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		// encript password
		const salt: string = await bcrypt.genSalt(10);
		req.body.password = await bcrypt.hash(`${req.body.password}`, salt);

		// define email
		const { password } = req.body;
		const { id }: any = req.headers.token;

		// query for valid email
		await getRepository(fm_client)
			.createQueryBuilder()
			.update(fm_client)
			.set({ password })
			.where('id = :id', { id })
			.execute();

		// response
		res.status(200).json({ message: 'Contraseña actualizada con exito' });
	} catch (err) {
		err.logger = true;
		next(err);
	}
};
