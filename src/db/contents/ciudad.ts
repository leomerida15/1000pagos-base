import { getRepository } from 'typeorm';
import fm_ciudad from '../models/fm_ciudad';

const ciudad = async (): Promise<void> => {
	const data: fm_ciudad[] = [];
	let i: number = (data.length - 1) / 3 + 1;
	const rangos: any[] = [
		{ init: 0, end: Math.round(i) },
		{ init: Math.round(i), end: Math.round(i * 2) },
		{ init: Math.round(i * 2), end: Math.round(data.length - 1) },
	];
	console.log('rangos', rangos);

	const stop = rangos.map(async (item: { init: number; end: number }) => {
		const { init, end } = item;
		const info: fm_ciudad[] = data.slice(init, end);
		const valid = await getRepository(fm_ciudad).find({ where: info });
		if (!valid.length) await getRepository(fm_ciudad).save(info);
	});
	await Promise.all(stop);
};

export default ciudad;
