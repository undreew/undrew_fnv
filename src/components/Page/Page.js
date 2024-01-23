import React from 'react';
import {Box, Container} from '@chakra-ui/react';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

import {useLayout} from 'contexts/LayoutContext';

function Page(props) {
	const {children} = props;

	const {header, footer} = useLayout();
	const _header = header && <PageHeader />;
	const _footer = footer && <PageFooter />;

	return (
		<Container
			display='flex'
			height='100vh'
			flexDir='column'
			maxW={{
				sm: '2xl',
				md: '4xl',
				lg: '7xl',
			}}
		>
			{_header}

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

			{_footer}
		</Container>
	);
}

export default Page;
