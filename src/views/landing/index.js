import React from 'react';
import {Box, HStack, Text} from '@chakra-ui/react';

import Landing from './Landing';

import {PageHeader} from 'components/Page';
import {PublicLayout} from 'components/Layouts';

function FreeShippingBanner() {
	return (
		<HStack
			sx={{
				py: 2,
				color: 'white',
				bg: 'primary.600',
				textStyle: 'bodyXs',
				fontWeight: 'semibold',
				justifyContent: 'center',
			}}
		>
			<Text>Enjoy Free Shipping On All Orders</Text>
		</HStack>
	);
}

function LandingHeader() {
	return (
		<Box>
			<FreeShippingBanner />
			<PageHeader />
		</Box>
	);
}

function Index() {
	return (
		<PublicLayout header={<LandingHeader />} footer>
			<Landing />
		</PublicLayout>
	);
}

export default Index;
