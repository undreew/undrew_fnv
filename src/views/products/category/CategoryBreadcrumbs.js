import React from 'react';
import {useParams} from 'react-router-dom';

import {startCase} from 'lodash';

import {PageContainer} from 'components/Page';
import {DashboardBreadcrumb} from 'components/Dashboard';

function CategoryBreadcrumbs() {
	const {category} = useParams();

	const items = [
		{
			to: '/',
			label: 'Home',
		},
		{
			isActive: true,
			label: startCase(category) || 'Loading...',
		},
	];

	return (
		<PageContainer>
			<DashboardBreadcrumb items={items} />
		</PageContainer>
	);
}

export default CategoryBreadcrumbs;
