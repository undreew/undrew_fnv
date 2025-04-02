import React from 'react';
import {Link} from 'react-router-dom';
import {FaRegHeart} from 'react-icons/fa';
import {Box, HStack} from '@chakra-ui/react';

import {LinkLogo} from 'components/Links';
import {CartDrawer} from 'components/Drawer';
import {ButtonIcon} from 'components/Buttons';

import PageHeaderSearch from './PageHeaderSearch';
import PageHeaderMobileMenu from './PageHeaderMobileMenu';

import {useAuth} from 'contexts/AuthContext';

function PageHeaderMobile() {
	const {isAuth} = useAuth();

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
				<ButtonIcon icon={<FaRegHeart />} as={Link} to='/wishlist' />

				<ButtonIcon icon={<CartDrawer />} />
			</HStack>
		</>
	);
}

export default PageHeaderMobile;
