import React, {Fragment} from 'react';
import {Box, Container, Flex, Text, useMediaQuery} from '@chakra-ui/react';

import PageHeaderMobile from './PageHeaderMobile';
import PageHeaderDesktop from './PageHeaderDesktop';

import {DEFAULT_CONTAINER_BREAKPOINTS} from 'constants/breakpoints';

function FreeShippingBanner() {
	return (
		<Box
			sx={{
				py: 2,
				color: 'white',
				bg: 'primary.600',
				textAlign: 'center',
				textStyle: 'bodyMd',
				fontWeight: 'semibold',
			}}
		>
			<Text>Enjoy Free Shipping On All Orders</Text>
		</Box>
	);
}

function PageHeader() {
	const [isSmallerThanSm] = useMediaQuery('(max-width: 30em)');

	return (
		<Fragment>
			<FreeShippingBanner />
			<Container maxW={DEFAULT_CONTAINER_BREAKPOINTS}>
				<Flex justify='space-between' alignItems='center' py={2}>
					{isSmallerThanSm ? <PageHeaderMobile /> : <PageHeaderDesktop />}
				</Flex>
			</Container>
		</Fragment>
	);
}

export default PageHeader;
