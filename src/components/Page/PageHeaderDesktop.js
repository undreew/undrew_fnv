import {Link} from 'react-router-dom';
import React, {createElement} from 'react';
import {FaRegUser, FaDashcube} from 'react-icons/fa';
import {Divider, HStack} from '@chakra-ui/react';

import {LinkLogo} from 'components/Links';
import {CartPopover} from 'components/Popover';

import PageHeaderSearch from './PageHeaderSearch';
import PageHeaderDesktopMenu from './PageHeaderDesktopMenu';
import PageHeaderDesktopLinks from './PageHeaderDesktopLinks';

import {map} from 'lodash';
import {ButtonIcon} from 'components/Buttons';

function PageHeaderDesktop(props) {
	const {isAuth} = props;

	const links = [
		{component: PageHeaderSearch},
		!isAuth && {
			as: Link,
			to: '/login',
			label: 'Login',
			variant: 'ghost',
			icon: <FaRegUser />,
			component: ButtonIcon,
		},
		isAuth && {
			as: Link,
			to: '/products',
			variant: 'ghost',
			label: 'Products',
			icon: <FaDashcube />,
			component: ButtonIcon,
		},
		isAuth && {component: CartPopover},
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

				<Divider
					orientation='vertical'
					colorScheme='green'
					size='lg'
					h='20px'
					w='10px'
				/>

				{isAuth && <PageHeaderDesktopMenu />}
			</HStack>
		</>
	);
}

export default PageHeaderDesktop;
