import React from 'react';

import Register from './Register';
import {GuestLayout} from 'components/Layouts';

function Index() {
	return (
		<GuestLayout header={true}>
			<Register />
		</GuestLayout>
	);
}

export default Index;
