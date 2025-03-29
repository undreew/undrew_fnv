import {DashboardBreadcrumb} from 'components/Dashboard';
import {PageContainer} from 'components/Page';
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

	return (
		<PageContainer>
			<DashboardBreadcrumb items={items} />
		</PageContainer>
	);
}

export default ProductsBreadcrumb;
