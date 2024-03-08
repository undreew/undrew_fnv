import React from 'react';

import Dashboard from './Dashboard';
import {PrivateLayout} from 'components/Layouts';
import {DashboardContainer} from 'components/Dashboard';
import {Text} from '@chakra-ui/react';

function Index() {
	return (
		<PrivateLayout>
			<DashboardContainer>
				{/* <Dashboard /> */}
				<Text>Dashboard</Text>
			</DashboardContainer>
		</PrivateLayout>
	);
}

export default Index;
