import React, {Fragment} from 'react';
import {Box, HStack, Image, SimpleGrid, Text} from '@chakra-ui/react';

import {PageContainer} from 'components/Page';
import register from 'assets/images/register.png';

function GuestFormImage(props) {
	return <Image objectFit='cover' alt='Register' src={register} {...props} />;
}

function GuestFormContainer(props) {
	const {children, title} = props;

	return (
		<Fragment>
			<GuestFormImage height={350} display={{base: 'block', lg: 'none'}} />
			<PageContainer>
				<SimpleGrid
					columns={{base: 1, sm: 1, lg: 2}}
					placeItems='center'
					spacing={5}
					py={10}
				>
					<GuestFormImage display={{base: 'none', lg: 'block'}} />
					<Box w='100%' maxW='375px'>
						<HStack justifyContent='center' mb={7}>
							<Text textStyle='h3' fontFamily='heading'>
								{title}
							</Text>
						</HStack>

						{children}
					</Box>
				</SimpleGrid>
			</PageContainer>
		</Fragment>
	);
}

export default GuestFormContainer;
