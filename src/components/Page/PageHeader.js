import React from 'react';
import {Flex, useMediaQuery} from '@chakra-ui/react';

import PageHeaderMobile from './PageHeaderMobile';
import PageHeaderDesktop from './PageHeaderDesktop';
import {useAuth} from 'contexts/AuthContext';

function PageHeader() {
	const {isAuth} = useAuth();
	const [isSmallerThanSm] = useMediaQuery('(max-width: 30em)');

	return (
		<Flex justify='space-between' alignItems='center' paddingTop={2}>
			{isSmallerThanSm ? (
				<PageHeaderMobile isAuth={isAuth} />
			) : (
				<PageHeaderDesktop isAuth={isAuth} />
			)}
		</Flex>
	);
}

export default PageHeader;
