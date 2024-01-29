import {FormControl, Input, VStack} from '@chakra-ui/react';
import React from 'react';

function DashboardUserDetails(props) {
	return (
		<VStack gap={3}>
			<FormControl isRequired>
				<Input type='text' name='firstName' placeholder='First Name' />
			</FormControl>

			<FormControl isRequired>
				<Input type='text' name='lastName' placeholder='Last Name' />
			</FormControl>
		</VStack>
	);
}

export default DashboardUserDetails;
