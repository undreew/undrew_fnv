import React from 'react';
import {Outlet} from 'react-router-dom';

import {PrivateLayout} from 'components/Layouts';
import {DashboardContainer} from 'components/Dashboard';

function Index() {
	return (
		<PrivateLayout>
			<DashboardContainer>
				<Outlet />
			</DashboardContainer>
		</PrivateLayout>
	);
}

export default Index;
