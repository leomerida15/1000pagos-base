import e, { NextFunction, Request, Response } from 'express';
import { Api } from 'interfaces';
import Resp from '../../Middlewares/res/resp';
import fm_client from '../../db/models/fm_client';
import Msg from '../../hooks/messages/index.ts';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import fm_phone from '../../db/models/fm_phone';
import { validationResult } from 'express-validator';
import fm_ident_type from '../../db/models/fm_ident_type';
import fm_commerce from '../../db/models/fm_commerce';
import fm_location from '../../db/models/fm_location';
import fm_bank from '../../db/models/fm_bank';
import fm_dir_post from '../../db/models/fm_dir_pos';
import fm_bank_commerce from '../../db/models/fm_bank_commerce';
import fm_request from '../../db/models/fm_request';

export const fm_valid_client = async (
	req: Request<any, Api.Resp, fm_client>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		validationResult(req).throw();

		const { phone1, phone2, email, id_ident_type, ident_num }: any = req.body;

		let client = await getRepository(fm_client).findOne({ email, id_ident_type, ident_num });

		let message: string = ``;

		if (!client) {
			// validar existencia de la clave cumpuesta
			const validIdent = await getRepository(fm_client).findOne({ id_ident_type, ident_num });
			if (validIdent) throw { message: 'el documento de identidad ya esta afiliado a un correo' };

			// validar existencia de la clave cumpuesta
			const validMail = await getRepository(fm_client).findOne({ email });
			if (validMail) throw { message: 'el correo ya esta asociado a otro documento de identidad' };

			const type = await getRepository(fm_ident_type).findByIds([id_ident_type]);
			// encript password
			const salt: string = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(type[0].name + ident_num + '.', salt);

			client = await getRepository(fm_client).save(req.body);
			const resp = await getRepository(fm_client).save(req.body);

			// definimos data de telefonos
			const id_client: any = resp.id;
			const phones: fm_phone[] = [phone1, phone2].map((phone: string): fm_phone => ({ phone, id_client }));

			// guardamos los telefonos
			await getRepository(fm_phone).save(phones);

			message = Msg('client', client.id).create;
		} else message = Msg('client', client.id).get;

		Resp(req, res, { message, info: { id: client.id } });
	} catch (err) {
		next(err);
	}
};

interface commerce extends fm_commerce {
	location: fm_location;
}

export const fm_create_commerce = async (
	req: Request<Api.params, Api.Resp, commerce>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		validationResult(req).throw();

		const id_client: any = req.params.id;
		const { id_ident_type, ident_num, special_contributor, location, name, id_activity } = req.body;
		let commerce = await getRepository(fm_commerce).findOne({ id_ident_type, ident_num, id_client });

		let message: string = ``;

		if (!commerce) {
			const commerce_doc = await getRepository(fm_commerce).findOne({ id_ident_type, ident_num });
			if (commerce_doc) throw { message: 'el rif del comercio esta asociado a otro cliente' };

			// validar existencia de la clave cumpuesta
			const reslocation = await getRepository(fm_location).save(location);
			const id_location = reslocation.id;

			const data = getRepository(fm_commerce).create({
				name,
				id_client,
				id_ident_type,
				ident_num,
				id_location,
				special_contributor,
				id_activity,
			});
			commerce = await getRepository(fm_commerce).save(data);

			// const bank_comer = getRepository(fm_bank_commerce).create({
			// 	bank_account_num,
			// 	id_commerce: commerce.id,
			// 	id_bank: bank.id,
			// });
			// await getRepository(fm_bank_commerce).save(bank_comer);

			message = Msg('commercio', commerce.id).create;
		} else message = Msg('commercio', commerce.id).get;

		Resp(req, res, { message, info: { id_commerce: commerce.id } });
	} catch (err) {
		next(err);
	}
};

// register valid 1
export const valid_existin_client = async (
	req: Request<any, Api.Resp, fm_client>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		validationResult(req).throw();

		const { email, id_ident_type, ident_num } = req.body;

		let resp: Api.Resp = { message: ``, info: { mash: false } };

		// validar existencia de la clave cumpuesta
		const validIdent = await getRepository(fm_client).findOne({ id_ident_type, ident_num });
		if (validIdent && validIdent.email != email) {
			throw { message: 'el documento de identidad ya esta afiliado a un correo' };
		}

		const validIdentType: any = await getRepository(fm_client)
			.createQueryBuilder('fm_clinet')
			.leftJoinAndSelect('fm_clinet.id_ident_type', 'id_ident_type')
			.where(`fm_clinet.ident_num = ${ident_num}`)
			.getOne();

		if (validIdentType && validIdentType.id_ident_type.id != id_ident_type) {
			throw { message: 'el tipo de docuemnto de identidad no coinside' };
		}

		// validar existencia de la clave cumpuesta
		const validMail = await getRepository(fm_client).findOne({ email });
		if (validMail && validMail.ident_num != ident_num && validMail.id_ident_type != id_ident_type) {
			throw { message: 'el correo ya esta asociado a otro documento de identidad' };
		}

		// validar existencia de la clave cumpuesta
		const client = await getRepository(fm_client).findOne({ id_ident_type, ident_num, email });
		if (client) resp = { message: 'el usuario existe', info: { id: client.id, mash: true } };
		else if (!resp.message.length) resp.message = `ni el correo ni la ci existen`;

		Resp(req, res, resp);
	} catch (err) {
		next(err);
	}
};

export const FM_create = async (
	req: Request<any, Api.Resp, fm_request>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		validationResult(req).throw();

		const { id_client, id_commerce } = req.body;
	} catch (err) {
		next(err);
	}
};
