import React from 'react';
import {GuestLayout} from 'components/Layouts';
import {
	Box,
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';
import {FaSearch, FaUser} from 'react-icons/fa';

function Index() {
	return (
		<GuestLayout header={false}>
			<Box mt={5} display='flex' flexDir='column' gap={3}>
				<FormControl isInvalid={false}>
					<InputGroup>
						<InputLeftElement>
							<FaUser />
						</InputLeftElement>
						<Input type='text' variant='modima' placeholder='First Name' />
					</InputGroup>

					<FormErrorMessage>This field is required.</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={true}>
					<InputGroup>
						<InputLeftElement>
							<FaSearch />
						</InputLeftElement>
						<Input type='text' variant='modimaFlush' placeholder='Test' />
					</InputGroup>
				</FormControl>
			</Box>
		</GuestLayout>
	);
}

export default Index;
