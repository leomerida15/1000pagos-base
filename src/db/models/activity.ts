import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { ActivityInit } from '../../interfaces/db';

export default (config: any) => {
	const { INTEGER, STRING } = DataTypes;

	return Sql.define<ActivityInit>(
		'fm_activity',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			name: { type: STRING({ length: 128 }) },
		},
		config
	);
};
