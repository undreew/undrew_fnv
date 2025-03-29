import React from 'react';

import Register from './Register';
import {GuestLayout} from 'components/Layouts';

function Index() {
	return (
		<GuestLayout header footer>
			<Register />
		</GuestLayout>
	);
}

export default Index;
