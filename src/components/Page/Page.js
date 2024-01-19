import React from 'react';

import {Box, Container} from '@chakra-ui/react';
import PageHeader from './PageHeader';

function Page(props) {
	const {children} = props;

	return (
		<Container
			maxW={['sm', '2xl', '3xl', '7xl']}
			display='flex'
			flexDir='column'
		>
			<PageHeader />

			<Box as='main'>{children}</Box>
		</Container>
	);
}

export default Page;
