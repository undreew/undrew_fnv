import React from 'react';
import {SimpleGrid} from '@chakra-ui/react';

function DashboardListContent(props) {
	const {children, isLoading} = props;

	return (
		<SimpleGrid columns={{sm: 1, md: 2, lg: 2}} spacing={5}>
			{isLoading ? <div>loading...</div> : children}
		</SimpleGrid>
	);
}

export default DashboardListContent;
