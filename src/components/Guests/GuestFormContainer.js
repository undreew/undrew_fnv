import React from 'react';
import {Image, SimpleGrid} from '@chakra-ui/react';

import register from 'assets/images/register.png';

function GuestFormContainer(props) {
	const {children} = props;

	return (
		<SimpleGrid columns={2} spacing={5} h='100vh' placeItems='center'>
			<Image src={register} alt='Register' />

			{children}
		</SimpleGrid>
	);
}

export default GuestFormContainer;
