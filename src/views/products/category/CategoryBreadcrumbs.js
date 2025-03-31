import React from 'react';
import {useParams} from 'react-router-dom';

import {PageContainer} from 'components/Page';
import {DashboardBreadcrumb} from 'components/Dashboard';

import {PRODUCT_CATEGORIES} from 'constants/products';

function CategoryBreadcrumbs() {
	const {category} = useParams();

	const items = [
		{
			to: '/',
			label: 'Home',
		},
		{
			isActive: true,
			label: PRODUCT_CATEGORIES[category] || 'Loading...',
		},
	];

	return (
		<PageContainer>
			<DashboardBreadcrumb items={items} />
		</PageContainer>
	);
}

export default CategoryBreadcrumbs;
