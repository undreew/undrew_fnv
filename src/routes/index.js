import PAGE_ACCESS from 'constants/page-access';
import landing from './landing';

const routes = [
	{
		access: PAGE_ACCESS.public,
		...landing,
	},
];

export default routes;
