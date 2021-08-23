import idenDoc from './models/idenDoc';
import roles from './models/roles';
export default async () => {
	try {
		await idenDoc();
		await roles();
	} catch (err) {
		console.log(err);
	}
};
