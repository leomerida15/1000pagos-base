import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { BackCommerceInit } from '../../interfaces/db';

export default (config: any) => {
	const { INTEGER } = DataTypes;

	return Sql.define<BackCommerceInit>(
		'fm_bank_commerce',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			id_commerce: { type: INTEGER({ length: 11 }) },
			id_bank: { type: INTEGER({ length: 11 }) },
			bank_account_num: { type: INTEGER({ length: 20 }) },
		},
		config
	);
};
