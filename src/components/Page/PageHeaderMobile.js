import React from 'react';
import {Box, HStack, IconButton} from '@chakra-ui/react';
import {FaRegHeart, FaShoppingBag} from 'react-icons/fa';

import {LinkLogo} from 'components/Links';

import PageHeaderSearch from './PageHeaderSearch';
import PageHeaderMobileMenu from './PageHeaderMobileMenu';

function PageHeaderMobile(props) {
	const {isAuth} = props;

	return (
		<>
			<HStack>
				<PageHeaderMobileMenu isAuth={isAuth} />
				<PageHeaderSearch />
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
