import React from 'react';
import {Box, HStack, Image, SimpleGrid} from '@chakra-ui/react';

import register from 'assets/images/register.png';
import {LinkLogo} from 'components/Links';

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
				<HStack justifyContent='center' mb={2}>
					<LinkLogo />
				</HStack>

				{children}
			</Box>
		</SimpleGrid>
	);
}

export default GuestFormContainer;
