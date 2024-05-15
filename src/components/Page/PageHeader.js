import React from 'react';
import {Container, Flex, useMediaQuery} from '@chakra-ui/react';

import PageHeaderMobile from './PageHeaderMobile';
import PageHeaderDesktop from './PageHeaderDesktop';
import {useAuth} from 'contexts/AuthContext';

function PageHeader() {
	const {isAuth} = useAuth();
	const [isSmallerThanSm] = useMediaQuery('(max-width: 30em)');

	return (
		<Container
			maxW={{
				sm: '2xl',
				md: '4xl',
				lg: '7xl',
			}}
		>
			<Flex justify='space-between' alignItems='center' paddingY={2}>
				{isSmallerThanSm ? (
					<PageHeaderMobile isAuth={isAuth} />
				) : (
					<PageHeaderDesktop isAuth={isAuth} />
				)}
			</Flex>
		</Container>
	);
}

export default PageHeader;
