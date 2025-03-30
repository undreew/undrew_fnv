import React from 'react';

import useQuery from 'hooks/useQuery';

import {PageContainer} from 'components/Page';
import {DashboardBreadcrumb} from 'components/Dashboard';

function SearchBreadcrumb() {
	const {query} = useQuery();
	const {name} = query;

	const items = [
		{
			to: '/',
			label: 'Home',
		},
		{
			isActive: true,
			label: name || 'Search',
		},
	];

	return (
		<PageContainer>
			<DashboardBreadcrumb items={items} />
		</PageContainer>
	);
}

export default SearchBreadcrumb;
