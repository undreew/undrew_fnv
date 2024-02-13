import React from 'react';
import {Box, Text} from '@chakra-ui/react';

function DashboardHeader(props) {
	const {title} = props;

	return (
		<Box>
			<Text textStyle='h3' mt={2}>
				{title}
			</Text>
		</Box>
	);
}

export default DashboardHeader;
