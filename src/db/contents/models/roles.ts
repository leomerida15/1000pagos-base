import { Roles } from '../../models';

export default async () => {
	await Roles.create([{ name: 'client' }, { name: 'force' }, { name: 'worker' }]);
};
