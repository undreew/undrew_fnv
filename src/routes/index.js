import PAGE_ACCESS from 'constants/page-access';

import landing from './landing';
import register from './register';
import login from './login';
import dashboard from './dashboard';

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
	{
		access: PAGE_ACCESS.private,
		...dashboard,
	},
];

export default routes;
