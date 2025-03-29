import {GuestLayout} from 'components/Layouts';
import React from 'react';
import Login from './Login';

function Index() {
	return (
		<GuestLayout header footer>
			<Login />
		</GuestLayout>
	);
}

export default Index;
