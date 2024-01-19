import PAGE_ACCESS from 'constants/page-access';

import landing from './landing';
import register from './register';

const routes = [
	{
		access: PAGE_ACCESS.public,
		...landing,
	},
	{
		access: PAGE_ACCESS.guest,
		...register,
	},
];

export default routes;
