import ident_type from './ident_type';
import roles from './roles';
import phone from './phone';
export default async () => {
	await ident_type();
	await roles();
	// await phone();
};
