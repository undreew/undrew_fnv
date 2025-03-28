import React from 'react';
import {Link} from 'react-router-dom';

import {FaRegHeart, FaSignOutAlt, FaUserAlt} from 'react-icons/fa';

import {Avatar, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';

import {useAuth} from 'contexts/AuthContext';

function DesktopMenu({items}) {
	return (
		<Menu>
			<MenuButton>
				<Avatar size='sm' />
			</MenuButton>
			<MenuList>
				{(items || []).map((item, index) => {
					const {to, icon, label} = item || {};
					return (
						<MenuItem key={index} as={Link} to={to} icon={icon}>
							{label}
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
}

function PageHeaderDesktopMenu() {
	const {isAuth} = useAuth();

	const items = [
		isAuth && {
			to: '/account',
			label: 'Account',
			icon: <FaUserAlt />,
		},
		{
			to: '/wishlist',
			label: 'Wishlist',
			icon: <FaRegHeart />,
		},
		isAuth && {
			to: '/logout',
			label: 'Logout',
			icon: <FaSignOutAlt />,
		},
	].filter((v) => v);

	return <DesktopMenu items={items} />;
}

export default PageHeaderDesktopMenu;
