import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { ParroquiaInit } from '../../interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER } = DataTypes;

	return Sql.define(
		'fm_municipios',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			id_estado: { type: INTEGER({ length: 11 }) },
			municipio: { type: STRING({ length: 250 }) },
		},
		config,
	);
};
