import React from 'react';
import {Flex, useMediaQuery} from '@chakra-ui/react';

import PageHeaderMobile from './PageHeaderMobile';
import PageHeaderDesktop from './PageHeaderDesktop';
import {useAuth} from 'contexts/AuthContext';

const links = [
	{label: 'Collection', to: '/collection'},
	{label: 'New In', to: '/new-in'},
	// {label: 'Modiweek', to: '/modiweek'},
	// {label: 'Plus Size', to: '/plus-size'},
	{label: 'Sustainability', to: '/sustainability'},
];

function PageHeader() {
	const {isAuth} = useAuth();
	const [isSmallerThanSm] = useMediaQuery('(max-width: 30em)');

	return (
		<Flex justify='space-between' alignItems='center' paddingTop={2}>
			{isSmallerThanSm ? (
				<PageHeaderMobile isAuth={isAuth} />
			) : (
				<PageHeaderDesktop items={links} isAuth={isAuth} />
			)}
		</Flex>
	);
}

export default PageHeader;
