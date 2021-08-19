import { BankCommerce, Commerce } from '../models';

export default async () => {
	try {
		// ejemplo

		console.log('hola');

		console.log('Commerce', Commerce.hasMany(BankCommerce));

		// usuarios at Roles_has_usuarios
		Commerce.hasMany(BankCommerce);
		BankCommerce.belongsTo(Commerce, {
			foreignKey: {
				name: 'id_commerce',
			},
		});
		console.log('hola');
	} catch (err) {
		console.log(err);
	}
};
