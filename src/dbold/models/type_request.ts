import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { TypeRequest } from 'interfaces/db';

export default (config: any) => {
	const { INTEGER, STRING } = DataTypes;

	return Sql.define<TypeRequest>(
		'fm_type_request',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			name: { type: STRING({ length: 128 }) },
		},
		config,
	);
};
