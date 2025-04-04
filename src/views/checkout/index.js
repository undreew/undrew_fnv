import React from 'react';

import {PrivateLayout} from 'components/Layouts';
import {DashboardContainer} from 'components/Dashboard';

import Checkout from './Checkout';
import CheckoutPageHeader from './CheckoutPageHeader';

function Index() {
	return (
		<PrivateLayout header={<CheckoutPageHeader />}>
			<DashboardContainer>
				<Checkout />
			</DashboardContainer>
		</PrivateLayout>
	);
}

export default Index;
