import ident_type from './ident_type';
import payment_method from './payment_method';
import roles from './roles';
export default async () => {
	await ident_type();
	await roles();
	await payment_method();
};
