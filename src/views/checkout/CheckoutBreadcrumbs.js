import React from 'react';
import {Link} from 'react-router-dom';
import {Button, HStack} from '@chakra-ui/react';

import {PageContainer} from 'components/Page';
import {DashboardBreadcrumb} from 'components/Dashboard';

function CheckoutBreadcrumbs() {
	const items = [
		{
			to: '/products', // redirect to prev page
			label: 'Back',
		},
	];

	return (
		<PageContainer as={HStack} justifyContent='space-between'>
			<DashboardBreadcrumb items={items} />

			<Button variant='modimaGhost' as={Link} to='/products'>
				Continue Shopping
			</Button>
		</PageContainer>
	);
}

export default CheckoutBreadcrumbs;
