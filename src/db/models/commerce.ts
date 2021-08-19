import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { CommerceInit } from '../../interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER, BOOLEAN } = DataTypes;

	return Sql.define<CommerceInit>(
		'fm_commerce',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			name: { type: STRING({ length: 128 }) },
			id_ident_type: { type: INTEGER({ length: 11 }) },
			nro_ident: { type: STRING({ length: 128 }) },
			special_contributor: { type: BOOLEAN },
			id_activity: { type: INTEGER({ length: 11 }) },
			id_location: { type: INTEGER({ length: 11 }) },
			id_aci: { type: INTEGER({ length: 11 }) },
			id_user: { type: INTEGER({ length: 11 }) },
		},
		config
	);
};
