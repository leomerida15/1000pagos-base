// models
import clinet from './client';
import way_pay from './way_pay';
import type_request from './type_request';
import status_request from './status_request';
import roles from './roles';
import dir_Pos from './dir_pos';
import request from './request';
import phone from './phone';
import parroqui from './parroquias';
import municipios from './municipios';
import estados from './estados';
import location from './location';
import iden_type from './IdentType';
import department from './department';
import commerce from './commerce';
import cod_postal from './cod_postal';
import ciudades from './ciudades';
import bank_commerce from './bank_commerce';
import bank from './bank';
import activity from './activity';
import worker from './worker';

//

const config: any = { freezeTableName: true, timestamps: false };
export default () => {
	return {
		Clinet: clinet(config),
		WayPay: way_pay(config),
		TypeRequest: type_request(config),
		StatusRequest: status_request(config),
		Roles: roles(config),
		DirPos: dir_Pos(config),
		Request: request(config),
		Phone: phone(config),
		Parroquias: parroqui(config),
		Municipios: municipios(config),
		Estados: estados(config),
		Location: location(config),
		IdentType: iden_type(config),
		Department: department(config),
		Commerce: commerce(config),
		CodPostal: cod_postal(config),
		Ciudades: ciudades(config),
		BankCommerce: bank_commerce(config),
		Bank: bank(config),
		Activity: activity(config),
		Worker: worker(config),
	};
};

export const Clinet = clinet(config);
//
export const WayPay = way_pay(config);
//
export const TypeRequest = type_request(config);
//
export const StatusRequest = status_request(config);
//
export const Roles = roles(config);
//
export const DirPos = dir_Pos(config);
//
export const Request = request(config);
//
export const Phone = phone(config);
//
export const Parroquias = parroqui(config);
//
export const Municipios = municipios(config);
//
export const Estados = estados(config);
//
export const Location = location(config);
//
export const IdentType = iden_type(config);
//
export const Department = department(config);
//
export const Commerce = commerce(config);
//
export const CodPostal = cod_postal(config);
//
export const Ciudades = ciudades(config);
//
export const BankCommerce = bank_commerce(config);
//
export const Bank = bank(config);
//
export const Activity = activity(config);
//
export const Worker = worker(config);
