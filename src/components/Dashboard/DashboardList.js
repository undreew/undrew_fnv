import React from 'react';
import {SimpleGrid} from '@chakra-ui/react';

function DashboardList(props) {
	const {children} = props;

	return (
		<SimpleGrid columns={{sm: 1, md: 2, lg: 2}} spacing={5}>
			{children}
		</SimpleGrid>
	);
}

export default DashboardList;
