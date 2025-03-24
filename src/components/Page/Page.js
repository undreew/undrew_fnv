import React from 'react';
import {Box} from '@chakra-ui/react';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

import {useLayout} from 'contexts/LayoutContext';

function Page(props) {
	const {children} = props;

	const {header, footer} = useLayout();
	const _header = header ? header : <PageHeader />;
	const _footer = footer && <PageFooter />;

	return (
		<Box sx={{maxHeight: '100vh', width: '100%'}}>
			{_header}

			<Box
				as='main'
				display='flex'
				flexGrow={1}
				flexDir='column'
				minHeight='100vh'
			>
				{children}
			</Box>

			{_footer}
		</Box>
	);
}

export default Page;
