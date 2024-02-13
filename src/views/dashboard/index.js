import React from 'react';
import {PrivateLayout} from 'components/Layouts';
import {DashboardContainer} from 'components/Dashboard';
import Dashboard from './Dashboard';

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
