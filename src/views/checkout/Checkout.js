import React from 'react';
import {Box} from '@chakra-ui/react';

import {
	DashboardList,
	DashboardHeader,
	DashboardContent,
} from 'components/Dashboard';
import {PageContainer} from 'components/Page';

import CheckoutBreadcrumbs from './CheckoutBreadcrumbs';

function Checkout() {
	return (
		<PageContainer>
			<CheckoutBreadcrumbs />
			<DashboardHeader title='Your Cart' />

			<DashboardContent>
				<DashboardList>List</DashboardList>
				<Box>Config</Box>
			</DashboardContent>
		</PageContainer>
	);
}

export default Checkout;
