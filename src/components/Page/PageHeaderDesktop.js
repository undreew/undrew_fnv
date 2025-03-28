import {Link} from 'react-router-dom';
import {HStack} from '@chakra-ui/react';
import React, {createElement} from 'react';
import {FaRegUser, FaDashcube, FaRegHeart} from 'react-icons/fa';

import {LinkLogo} from 'components/Links';
import {ButtonIcon} from 'components/Buttons';
import {CartPopover} from 'components/Popover';

import PageHeaderSearch from './PageHeaderSearch';
import PageHeaderDesktopLinks from './PageHeaderDesktopLinks';

import {map} from 'lodash';

function PageHeaderDesktop(props) {
	const {isAuth} = props;

	const links = [
		{component: PageHeaderSearch},
		!isAuth && {
			as: Link,
			to: '/login',
			label: 'Login',
			icon: <FaRegUser />,
			component: ButtonIcon,
		},
		isAuth && {
			as: Link,
			to: '/products',
			label: 'Products',
			icon: <FaDashcube />,
			component: ButtonIcon,
		},
		{
			as: Link,
			to: '/wishlist',
			label: 'Wishlist',
			icon: <FaRegHeart />,
			component: ButtonIcon,
		},
		{component: CartPopover},
	].filter(Boolean);

	return (
		<>
			<LinkLogo />

			<PageHeaderDesktopLinks />

			<HStack gap={3}>
				{map(links, (item, index) => {
					const {component, ...rest} = item;
					return createElement(component, {...rest, key: index});
				})}
			</HStack>
		</>
	);
}

export default PageHeaderDesktop;
