import React from 'react';
import {GuestLayout} from 'components/Layouts';
import {Box, Button} from '@chakra-ui/react';

function Index() {
	return (
		<GuestLayout header={false}>
			<Box mt={5} mx={1} display='flex' flexDir='column' gap={3}>
				<Button variant='modimaSolid' isDisabled={false}>
					Button
				</Button>

				<Button variant='ghost' colorScheme='purple' isDisabled={false}>
					Test
				</Button>
			</Box>
		</GuestLayout>
	);
}

export default Index;
