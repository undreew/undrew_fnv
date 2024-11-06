import React from 'react';

import Landing from './Landing';
import {PublicLayout} from 'components/Layouts';

function Index() {
	return (
		<PublicLayout header footer>
			<Landing />
		</PublicLayout>
	);
}

export default Index;
