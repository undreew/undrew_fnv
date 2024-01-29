import {FormControl, Input, VStack} from '@chakra-ui/react';
import React from 'react';

function DashboardUserCredentials(props) {
	return (
		<VStack gap={3}>
			<FormControl isRequired>
				<Input type='email' name='email' placeholder='Email' />
			</FormControl>

			<FormControl isRequired>
				<Input type='text' name='username' placeholder='Username' />
			</FormControl>

			<FormControl isRequired>
				<Input type='password' name='password' placeholder='Password' />
			</FormControl>
		</VStack>
	);
}

export default DashboardUserCredentials;
