import { id } from './db';
import estado from '../db/contents/estado';
export interface resp<info = any> {
	message: string;
	info?: info;
	token?: string;
}

export interface params {
	id: string | number;
}

export interface pMunicipio {
	id_estado: string | number;
}

export interface pParroquia {
	id_municipio: string | number;
}

export interface pCiudad {
	id_parroquia: string | number;
}
