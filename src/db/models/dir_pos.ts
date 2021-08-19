import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { DirPosInit } from '../../interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER } = DataTypes;

	return Sql.define<DirPosInit>(
		'fm_dir_pos',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			id_location: { type: INTEGER({ length: 11 }) },
			id_comemerce: { type: INTEGER({ length: 11 }) },
		},
		config,
	);
};
