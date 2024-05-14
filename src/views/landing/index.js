import React from 'react';

import Landing from './Landing';
import {GuestLayout} from 'components/Layouts';

function Index() {
	return (
		<GuestLayout header footer>
			<Landing />
		</GuestLayout>
	);
}

export default Index;
