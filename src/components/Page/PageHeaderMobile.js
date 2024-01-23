import React from 'react';
import {Box, HStack, IconButton} from '@chakra-ui/react';

import {LinkLogo} from 'components/Links';
import {FaBars, FaRegHeart, FaSearch, FaShoppingBag} from 'react-icons/fa';

function PageHeaderMobile() {
	return (
		<>
			<HStack>
				<IconButton variant='ghost'>
					<FaBars />
				</IconButton>

				<IconButton variant='ghost'>
					<FaSearch />
				</IconButton>
			</HStack>

			<Box>
				<LinkLogo />
			</Box>

			<HStack gap={2}>
				<IconButton variant='ghost'>
					<FaRegHeart />
				</IconButton>

				<IconButton variant='ghost'>
					<FaShoppingBag />
				</IconButton>
			</HStack>
		</>
	);
}

export default PageHeaderMobile;
