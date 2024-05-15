import {GuestLayout} from 'components/Layouts';
import React from 'react';
import Errors from './Errors';

function Index() {
	return (
		<GuestLayout header={false}>
			<Errors />
		</GuestLayout>
	);
}

export default Index;
