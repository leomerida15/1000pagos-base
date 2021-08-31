import fm_ident_type from '../models/fm_ident_type';
import { getRepository } from 'typeorm';
import fm_estado from '../models/fm_estado';

const estado = async (): Promise<void> => {
	const data: fm_estado[] = [
		{ id: 1, name: 'Amazonas', iso_3166: 'VE-X' },
		{ id: 2, name: 'Anzoátegui', iso_3166: 'VE-B' },
		{ id: 3, name: 'Apure', iso_3166: 'VE-C' },
		{ id: 4, name: 'Aragua', iso_3166: 'VE-D' },
		{ id: 5, name: 'Barinas', iso_3166: 'VE-E' },
		{ id: 6, name: 'Bolívar', iso_3166: 'VE-F' },
		{ id: 7, name: 'Carabobo', iso_3166: 'VE-G' },
		{ id: 8, name: 'Cojedes', iso_3166: 'VE-H' },
		{ id: 9, name: 'Delta Amacuro', iso_3166: 'VE-Y' },
		{ id: 10, name: 'Falcón', iso_3166: 'VE-I' },
		{ id: 11, name: 'Guárico', iso_3166: 'VE-J' },
		{ id: 12, name: 'Lara', iso_3166: 'VE-K' },
		{ id: 13, name: 'Mérida', iso_3166: 'VE-L' },
		{ id: 14, name: 'Miranda', iso_3166: 'VE-M' },
		{ id: 15, name: 'Monagas', iso_3166: 'VE-N' },
		{ id: 16, name: 'Nueva Esparta', iso_3166: 'VE-O' },
		{ id: 17, name: 'Portuguesa', iso_3166: 'VE-P' },
		{ id: 18, name: 'Sucre', iso_3166: 'VE-R' },
		{ id: 19, name: 'Táchira', iso_3166: 'VE-S' },
		{ id: 20, name: 'Trujillo', iso_3166: 'VE-T' },
		{ id: 21, name: 'La Guaira', iso_3166: 'VE-W' },
		{ id: 22, name: 'Yaracuy', iso_3166: 'VE-U' },
		{ id: 23, name: 'Zulia', iso_3166: 'VE-V' },
		{ id: 24, name: 'Distrito Capital', iso_3166: 'VE-A' },
		{ id: 25, name: 'Dependencias Federales', iso_3166: 'VE-Z' },
	];
	//
	const valid = await getRepository(fm_estado).find({ where: data });
	if (!valid.length) await getRepository(fm_estado).save(data);
};

export default estado;
