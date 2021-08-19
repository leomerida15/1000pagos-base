import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { PhoneInit } from '../../interfaces/db';
//

export default (config: any) => {
	const { STRING, INTEGER } = DataTypes;

	return Sql.define<PhoneInit>(
		'fm_phone',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			user_id: { type: INTEGER({ length: 128 }) },
			phone_number: { type: STRING({ length: 128 }) },
		},
		config,
	);
};
