import ident_type from './ident_type';
import payment_method from './payment_method';
import roles from './roles';
import worker from './worker';
import activity from './activity';
export default async () => {
	await ident_type();
	await roles();
	await payment_method();
	await worker();
	await activity();
};
