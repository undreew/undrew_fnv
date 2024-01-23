import React from 'react';
import {Flex, useMediaQuery} from '@chakra-ui/react';

import PageHeaderMobile from './PageHeaderMobile';
import PageHeaderDesktop from './PageHeaderDesktop';

const links = [
	{label: 'Collection', to: '/collection'},
	{label: 'New In', to: '/new-in'},
	// {label: 'Modiweek', to: '/modiweek'},
	// {label: 'Plus Size', to: '/plus-size'},
	{label: 'Sustainability', to: '/sustainability'},
];

function PageHeader() {
	const [isSmallerThanSm] = useMediaQuery('(max-width: 30em)');

	return (
		<Flex justify='space-between' alignItems='center' paddingTop={2}>
			{isSmallerThanSm ? (
				<PageHeaderMobile />
			) : (
				<PageHeaderDesktop items={links} />
			)}
		</Flex>
	);
}

export default PageHeader;
