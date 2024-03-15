import {PrivateLayout} from 'components/Layouts';
import React from 'react';
import {Outlet} from 'react-router-dom';

function Index() {
	return (
		<PrivateLayout>
			<Outlet />
		</PrivateLayout>
	);
}

export default Index;
