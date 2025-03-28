import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {Box, IconButton} from '@chakra-ui/react';

function PageHeaderSearch() {
	return (
		<Box>
			<IconButton variant='ghost'>
				<FaSearch />
			</IconButton>
		</Box>
	);
}

export default PageHeaderSearch;
