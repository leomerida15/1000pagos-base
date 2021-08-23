import { IdentType } from '../../models';

export default async () => {
	// type to ident docuent in venezuela
	try {
		IdentType.create([{ name: 'v' }, { name: 'e' }, { name: 'j' }, { name: 'p' }]);
	} catch (err) {
		console.log('idenDoc', err);
	}
};
