import React from 'react';
import {PrivateLayout} from 'components/Layouts';
import {DashboardContainer} from 'components/Dashboard';
import Wishlist from './Wishlist';

function Index() {
	return (
		<PrivateLayout>
			<DashboardContainer>
				<Wishlist />
			</DashboardContainer>
		</PrivateLayout>
	);
}

export default Index;
