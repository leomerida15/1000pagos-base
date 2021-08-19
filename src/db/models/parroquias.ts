import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { ParroquiaInit } from '../../interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER } = DataTypes;

	return Sql.define<ParroquiaInit>(
		'fm_parroquias',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			id_municipio: { type: INTEGER({ length: 11 }) },
			parroquia: { type: STRING({ length: 250 }) },
		},
		config,
	);
};
