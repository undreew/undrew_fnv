import React from 'react';

import {Box, Container} from '@chakra-ui/react';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

function Page(props) {
	const {children} = props;

	return (
		<Container
			display='flex'
			height='100vh'
			flexDir='column'
			maxW={['2xl', '3xl', '7xl']}
		>
			<PageHeader />

			<Box
				as='main'
				width='100%'
				flexGrow={1}
				display='flex'
				flexDir='column'
				overflow='hidden'
			>
				{children}
			</Box>

			<PageFooter />
		</Container>
	);
}

export default Page;
