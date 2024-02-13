import React from 'react';

import Dashboard from './Dashboard';
import {PrivateLayout} from 'components/Layouts';
import {DashboardContainer} from 'components/Dashboard';

function Index() {
	return (
		<PrivateLayout>
			<DashboardContainer>
				<Dashboard />
			</DashboardContainer>
		</PrivateLayout>
	);
}

export default Index;
