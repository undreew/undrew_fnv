import {PrivateLayout} from 'components/Layouts';
import React from 'react';
import Dashboard from './Dashboard';

function Index() {
	return (
		<PrivateLayout>
			<Dashboard />
		</PrivateLayout>
	);
}

export default Index;
