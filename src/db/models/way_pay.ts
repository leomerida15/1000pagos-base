import Sql from '../connections';
import { DataTypes, Model } from 'sequelize';
import { DB } from 'interfaces';

export default (config: any) => {
	const { INTEGER, STRING } = DataTypes;

	return Sql.define<DB.WayPayInit>(
		'way_pay',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			name: { type: STRING({ length: 128 }) },
		},
		config
	);
};
