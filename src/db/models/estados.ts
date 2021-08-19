import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { EstadosInit } from '../../interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER } = DataTypes;

	return Sql.define<EstadosInit>(
		'fm_estados',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			estado: { type: STRING({ length: 100 }) },
			iso_3166: { type: STRING({ length: 4 }) },
		},
		config,
	);
};
