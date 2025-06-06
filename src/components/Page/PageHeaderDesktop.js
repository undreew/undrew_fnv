import {Link} from 'react-router-dom';
import React, {createElement} from 'react';
import {FaRegUser, FaRegHeart} from 'react-icons/fa';

import {Divider, HStack} from '@chakra-ui/react';

import {LinkLogo} from 'components/Links';
import {ButtonIcon} from 'components/Buttons';

import PageHeaderSearch from './PageHeaderSearch';
import PageHeaderDesktopUser from './PageHeaderDesktopUser';
import PageHeaderDesktopLinks from './PageHeaderDesktopLinks';

import {map} from 'lodash';
import {useAuth} from 'contexts/AuthContext';
import {CartDrawer} from 'components/Drawer';

function PageHeaderDesktop() {
	const {isAuth} = useAuth();

	const iconsLinks = [
		{component: PageHeaderSearch},
		!isAuth && {
			as: Link,
			to: '/login',
			label: 'Login',
			icon: <FaRegUser />,
			component: ButtonIcon,
		},
		{
			as: Link,
			to: '/wishlist',
			label: 'Wishlist',
			icon: <FaRegHeart />,
			component: ButtonIcon,
		},
		{component: CartDrawer},
	].filter(Boolean);

	return (
		<>
			<LinkLogo />

			<PageHeaderDesktopLinks />

			<HStack gap={3}>
				{map(iconsLinks, (item, index) => {
					const {component, ...rest} = item;
					return createElement(component, {...rest, key: index});
				})}

				{isAuth && (
					<Divider
						orientation='vertical'
						colorScheme='green'
						size='lg'
						h='20px'
						w='10px'
					/>
				)}

				{isAuth && <PageHeaderDesktopUser />}
			</HStack>
		</>
	);
}

export default PageHeaderDesktop;
