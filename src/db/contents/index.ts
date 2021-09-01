import ident_type from './ident_type';
import payment_method from './payment_method';
import roles from './roles';
import worker from './worker';
import activity from './activity';
import Product from './product';
import estado from './estado';
import municipio from './municipio';
import parroquia from './parroquia';
import ciudad from './ciudad';

export default async () => {
	await ident_type();
	await roles();
	await payment_method();
	await worker();
	await activity();
	await Product();
	await estado();
	await municipio();
	await parroquia();
	// await ciudad();
};
