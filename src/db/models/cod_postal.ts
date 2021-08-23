import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { CodPostalInit } from '../../interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER, BOOLEAN } = DataTypes;

	return Sql.define<CodPostalInit>(
		'fm_cod_postal',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			id_parroquia: { type: INTEGER({ length: 11 }) },
			cod: { type: INTEGER({ length: 8 }) },
		},
		config,
	);
};
