import PAGE_ACCESS from 'constants/page-access';

import landing from './landing';
import register from './register';
import login from './login';

const routes = [
	{
		access: PAGE_ACCESS.public,
		...landing,
	},
	{
		access: PAGE_ACCESS.guest,
		...register,
	},
	{
		access: PAGE_ACCESS.guest,
		...login,
	},
];

export default routes;
