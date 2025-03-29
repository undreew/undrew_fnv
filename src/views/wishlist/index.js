import React from 'react';
import {GuestLayout} from 'components/Layouts';
import {DashboardContainer} from 'components/Dashboard';
import Wishlist from './Wishlist';

function Index() {
	return (
		<GuestLayout header footer>
			<DashboardContainer>
				<Wishlist />
			</DashboardContainer>
		</GuestLayout>
	);
}

export default Index;
