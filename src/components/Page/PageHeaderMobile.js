import React from 'react';
import {Box, HStack, IconButton} from '@chakra-ui/react';
import {FaSearch, FaRegHeart, FaShoppingBag} from 'react-icons/fa';

import {LinkLogo} from 'components/Links';
import PageHeaderMobileMenu from './PageHeaderMobileMenu';

function PageHeaderMobile(props) {
	const {isAuth} = props;

	return (
		<>
			<HStack>
				<PageHeaderMobileMenu isAuth={isAuth} />

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
