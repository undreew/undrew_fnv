import PAGE_ACCESS from 'constants/page-access';

import Error from 'views/errors';

import landing from './landing';
import register from './register';
import login from './login';
import products from './products';
import errors from './errors';
import logout from './logout';
import wishlist from './wishlist';
import checkout from './checkout';

const routes = [
	{
		access: PAGE_ACCESS.guest,
		...landing,
	},
	{
		access: PAGE_ACCESS.public,
		...register,
	},
	{
		access: PAGE_ACCESS.public,
		...login,
	},
	{
		access: PAGE_ACCESS.private,
		...wishlist,
	},
	{
		access: PAGE_ACCESS.guest,
		...products,
	},
	{
		access: PAGE_ACCESS.private,
		...checkout,
	},
	{
		access: PAGE_ACCESS.private,
		...logout,
	},
	{
		...errors,
	},
	// no error code found
	// when path e.g. error/hahaha
	// redirects to this
	{
		path: '/not-found',
		element: Error,
	},
	// not found page
	// when path e.g. /hahaha
	// redirects to this
	{
		path: '*',
		element: Error,
	},
];

export default routes;
