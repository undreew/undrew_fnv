import {DashboardBreadcrumb} from 'components/Dashboard';
import React from 'react';

function ProductsBreadcrumb() {
	const items = [
		{
			to: '/',
			label: 'Home',
		},
		{
			isActive: true,
			to: '/products',
			label: 'Shop All',
		},
	];

	return <DashboardBreadcrumb items={items} />;
}

export default ProductsBreadcrumb;
