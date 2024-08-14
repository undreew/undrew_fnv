import React from 'react';
import {Link} from 'react-router-dom';

import {FaRegHeart, FaSignOutAlt, FaUserAlt} from 'react-icons/fa';

import {Avatar, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';

function DesktopMenu({items}) {
	return (
		<Menu>
			<MenuButton>
				<Avatar size='sm'></Avatar>
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

function PageHeaderDesktopMenu(props) {
	const {isAuth} = props;

	const items = [
		isAuth && {
			to: '/account',
			label: 'Account',
			icon: <FaUserAlt />,
		},
		{
			to: '/favorites',
			label: 'Favorites',
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
