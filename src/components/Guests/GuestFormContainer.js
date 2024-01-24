import React from 'react';
import {Box, Image, SimpleGrid} from '@chakra-ui/react';

import register from 'assets/images/register.png';

function GuestFormContainer(props) {
	const {children} = props;

	return (
		<SimpleGrid
			columns={{base: 1, sm: 1, lg: 2}}
			placeItems='center'
			spacing={5}
			h='100vh'
		>
			<Image
				width='auto'
				alt='Register'
				src={register}
				display={{base: 'none', sm: 'none', md: 'none', lg: 'block'}}
			/>

			<Box w='100%' maxW='375px'>
				{children}
			</Box>
		</SimpleGrid>
	);
}

export default GuestFormContainer;
