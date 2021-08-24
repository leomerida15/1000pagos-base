import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { RolesInit } from '../../interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER } = DataTypes;

	return Sql.define<RolesInit>(
		'fm_roles',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			name: { type: STRING({ length: 128 }) },
		},
		config,
	);
};
