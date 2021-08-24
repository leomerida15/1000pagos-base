import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { ParroquiaInit } from '../../interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER } = DataTypes;

	return Sql.define(
		'fm_location',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			id_estado: { type: INTEGER({ length: 11 }) },
			id_municipio: { type: INTEGER({ length: 11 }) },
			id_ciudad: { type: INTEGER({ length: 11 }) },
			id_parroquia: { type: INTEGER({ length: 11 }) },
			id_cod_postal: { type: INTEGER({ length: 11 }) },
			sector: { type: STRING({ length: 11 }) },
			calle: { type: STRING({ length: 11 }) },
			local: { type: STRING({ length: 11 }) },
		},
		config,
	);
};
