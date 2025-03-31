import React from 'react';
import {Box} from '@chakra-ui/react';

function DashboardContainer(props) {
	const {children} = props;

	return (
		<Box sx={{my: 5}} minHeight='100vh'>
			{children}
		</Box>
	);
}

export default DashboardContainer;
