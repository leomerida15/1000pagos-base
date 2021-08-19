import { DB } from 'interfaces';
import hasMany from './hasMany';
import hasOne from './hasOne';
import { BankCommerce, Commerce } from '../models/index';

export default (sql: any): void => {
	try {
		interface obj {
			fks: { boy: string; key: string }[];
			dad: any;
		}

		const objs: obj[] = [{ fks: [{ boy: 'fm_bank_commerce', key: 'id_commerce' }], dad: 'fm_commerce' }];

		console.log(objs);

		const queryString: string = objs
			.map((obj: obj, i: number) => {
				const ands: string = obj.fks
					.map((item: { boy: string; key: string }, j: number) => {
						const fin: string = j == obj.fks.length - 1 ? ';' : ',';
						return (
							'constraint FK_' +
							obj.dad +
							'_' +
							item.boy +
							'_' +
							i +
							' foreign key (`' +
							item.key +
							'`) references ' +
							item.boy +
							' (id)' +
							fin
						);
					})
					.join('');

				return 'alter table `' + obj.dad + '` ' + ands;
			})
			.join('');

		sql.query(queryString);
	} catch (err) {
		console.error(err);
	}
};
