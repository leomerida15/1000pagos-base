import { DB } from 'interfaces';

const KeysQuey = (sql: any, objs: DB.keysQuery[]): void => {
	try {
		objs.map((obj: DB.keysQuery, i: number): void => {
			const talbe: string = /*sql*/ 'ALTER TABLE `' + obj.dad + '` ';

			const ands: string = obj.fks
				.map((item: DB.Fks, j: number) => {
					const fin: string = j == obj.fks.length - 1 ? ';' : ',';
					const nameFk: string = obj.dad + '_' + item.boy + '_fk_' + j;
					return (
						/*sql*/ 'ADD CONSTRAINT `' +
						nameFk +
						'` FOREIGN KEY (`' +
						item.key +
						'`) REFERENCES `' +
						item.boy +
						'` (`id`)' +
						fin
					);
				})
				.join('');

			return sql.query(talbe + ands);
		});
	} catch (err) {
		console.error(err);
	}
};

export default KeysQuey;
