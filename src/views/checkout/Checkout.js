import React from 'react';

import {
	DashboardList,
	DashboardHeader,
	DashboardContent,
} from 'components/Dashboard';
import {PageContainer} from 'components/Page';

import {useCart} from 'contexts/CartContext';

import CheckoutTable from './CheckoutTable';
import CheckoutSuccess from './CheckoutSuccess';
import CheckoutBreakdown from './CheckoutBreakdown';
import CheckoutBreadcrumbs from './CheckoutBreadcrumbs';

import useQuery from 'hooks/useQuery';
import useCheckout from './useCheckout';

function Checkout() {
	const {query} = useQuery();
	const cartProps = useCart();
	const checkoutProps = useCheckout();

	const {success} = query;

	if (success) {
		return <CheckoutSuccess />;
	}

	return (
		<PageContainer>
			<CheckoutBreadcrumbs />
			<DashboardHeader title='Your Cart' />

			<DashboardContent gap={0}>
				<DashboardList>
					<CheckoutTable {...cartProps} />
				</DashboardList>

				<CheckoutBreakdown {...cartProps} {...checkoutProps} />
			</DashboardContent>
		</PageContainer>
	);
}

export default Checkout;
