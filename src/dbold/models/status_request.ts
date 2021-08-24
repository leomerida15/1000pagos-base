import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { StatusRequestInit } from 'interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER } = DataTypes;

	return Sql.define<StatusRequestInit>(
		'fm_status_request',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			name: { type: STRING({ length: 128 }) },
		},
		config,
	);
};
