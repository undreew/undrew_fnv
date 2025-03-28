import React from 'react';
import {FaSearch} from 'react-icons/fa';

import {Box} from '@chakra-ui/react';

import {ButtonIcon} from 'components/Buttons';

function PageHeaderSearch() {
	return (
		<Box>
			<ButtonIcon icon={<FaSearch />} label='Search' />
		</Box>
	);
}

export default PageHeaderSearch;
