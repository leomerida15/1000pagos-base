import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { CiudadInit } from '../../interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER, BOOLEAN } = DataTypes;

	return Sql.define<CiudadInit>(
		'fm_type_request',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			id_estado: { type: INTEGER({ length: 11 }) },
			ciudad: { type: INTEGER({ length: 250 }) },
			capital: { type: BOOLEAN },
		},
		config
	);
};
