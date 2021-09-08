import { NextFunction, Request, Response } from 'express';
import { Api } from 'interfaces';
import { getRepository } from 'typeorm';
import fm_estado from '../../db/models/fm_estado';
import respOk from '../../Middlewares/token/respOk';
import fm_municipio from '../../db/models/fm_municipio';
import estado from '../../db/contents/estado';
import fm_parroquia from '../../db/models/fm_parroquia';
import fm_ciudad from '../../db/models/fm_ciudad';

export const getEstados = async (
	req: Request<any, Api.resp>,
	res: Response<Api.resp>,
	next: NextFunction
): Promise<void> => {
	try {
		// getter list of estados to db ith typeorm
		const info = await getRepository(fm_estado).find();

		respOk(req, res, { message: 'lista de estados', info });
	} catch (err) {
		next(err);
	}
};

export const getMunicipiosByEstado = async (
	req: Request<Api.pMunicipio, Api.resp>,
	res: Response<Api.resp>,
	next: NextFunction
): Promise<void> => {
	try {
		const { id_estado } = req.params;
		// getter list of estados to db ith typeorm
		const info = await getRepository(fm_municipio).find({ where: { id_estado } });

		respOk(req, res, { message: 'lista de parroquias', info });
	} catch (err) {
		next(err);
	}
};

export const getParroquiasByMunicipio = async (
	req: Request<Api.pParroquia, Api.resp>,
	res: Response<Api.resp>,
	next: NextFunction
): Promise<void> => {
	try {
		const { id_municipio } = req.params;
		console.log('id_municipio', id_municipio);

		// getter list of estados to db ith typeorm
		const info = await getRepository(fm_parroquia).find({ where: { id_municipio } });

		respOk(req, res, { message: 'lista de municipios', info });
	} catch (err) {
		next(err);
	}
};

export const getCiudadByParroquia = async (
	req: Request<Api.pCiudad, Api.resp>,
	res: Response<Api.resp>,
	next: NextFunction
): Promise<void> => {
	try {
		const { id_parroquia } = req.params;

		// getter list of estados to db ith typeorm
		const info = await getRepository(fm_ciudad).find({ where: { id_parroquia } });

		respOk(req, res, { message: 'lista de ciudad', info });
	} catch (err) {
		next(err);
	}
};
