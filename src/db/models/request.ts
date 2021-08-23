import Sql from '../connections';
import { DataTypes } from 'sequelize';
import { RequestInit } from 'interfaces/db';

export default (config: any) => {
	const { STRING, INTEGER } = DataTypes;

	return Sql.define<RequestInit>(
		'fm_request',
		{
			id: { type: INTEGER({ length: 11 }), primaryKey: true, autoIncrement: true },
			cont_post: { type: INTEGER({ length: 11 }) },
			fm_act: { type: STRING },
			fm_pro_doc: { type: STRING },
			fm_services: { type: STRING },
			fm_contributor: { type: STRING },
			fm_ref_bank: { type: STRING },
			fm_ref_perso: { type: STRING },
			fm_account: { type: STRING },
			fm_front_local: { type: STRING },
			fm_in_local: { type: STRING },
			fm_rif: { type: STRING },
			fm_ident_card: { type: STRING },
			id_way_pay: { type: INTEGER({ length: 11 }) },
			id_client: { type: INTEGER({ length: 11 }) },
			id_commerce: { type: INTEGER({ length: 11 }) },
			id_type_request: { type: INTEGER({ length: 11 }) },
			id_status_request: { type: INTEGER({ length: 11 }) },
		},
		config
	);
};
