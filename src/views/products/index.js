import React from 'react';
import {Outlet} from 'react-router-dom';

import {PrivateLayout} from 'components/Layouts';
import {DashboardContainer} from 'components/Dashboard';
import {Text} from '@chakra-ui/react';

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
