import ident_type from './ident_type';
import roles from './roles';
export default async () => {
	await ident_type();
	await roles();
};
