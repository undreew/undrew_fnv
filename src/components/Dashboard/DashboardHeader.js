import React from 'react';
import {Box, Heading} from '@chakra-ui/react';

function DashboardHeader(props) {
	const {title} = props;

	return (
		<Box>
			<Heading mt={2}>{title}</Heading>
		</Box>
	);
}

export default DashboardHeader;
