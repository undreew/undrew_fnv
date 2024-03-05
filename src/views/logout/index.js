import React, {useEffect} from 'react';
import {Stack} from '@chakra-ui/react';
import PulseLoader from 'react-spinners/PulseLoader';

import {GuestLayout} from 'components/Layouts';
import {useAuth} from 'contexts/AuthContext';
import {postAuthLogout} from 'api/auth';

const hex = '#36d7b7'; // temp

function Index() {
	const {removeAuth} = useAuth();

	async function logout() {
		try {
			await postAuthLogout();
			removeAuth();
		} catch (error) {
			removeAuth();
		}
	}

	useEffect(() => {
		logout();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<GuestLayout header={false}>
			<Stack direction='column' justify='center' alignItems='center' h='100vh'>
				<PulseLoader loading color={hex} />
			</Stack>
		</GuestLayout>
	);
}

export default Index;
