import React from 'react';
import {Outlet} from 'react-router-dom';

import {GuestLayout} from 'components/Layouts';
import {DashboardContainer} from 'components/Dashboard';

function Index() {
	return (
		<GuestLayout header footer>
			<DashboardContainer>
				<Outlet />
			</DashboardContainer>
		</GuestLayout>
	);
}

export default Index;
