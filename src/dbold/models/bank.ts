import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { BanckInit } from '../../interfaces/db';

export default (config: any) => {
	const { INTEGER, STRING } = DataTypes;

	return Sql.define<BanckInit>(
		'fm_bank',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			code: { type: INTEGER({ length: 4 }) },
			name: { type: STRING({ length: 128 }) },
		},
		config
	);
};
