import React from 'react';
import {Link} from 'react-router-dom';
import {FaProductHunt, FaSignOutAlt, FaUserAlt} from 'react-icons/fa';

import {Avatar, Menu, MenuItem} from '@chakra-ui/react';
import {MenuList, MenuButton, MenuOptionGroup} from '@chakra-ui/react';

import {map} from 'lodash';

function DesktopMenu({options}) {
	return (
		<Menu>
			<MenuButton>
				<Avatar size='sm' />
			</MenuButton>
			<MenuList>
				{map(options, (option = {}, index) => {
					const {title, items} = option;
					return (
						<MenuOptionGroup title={title} key={index}>
							{map(items, (item = {}, index) => {
								const {label, ...rest} = item;
								return (
									<MenuItem key={index} as={Link} aria-label={label} {...rest}>
										{label}
									</MenuItem>
								);
							})}
						</MenuOptionGroup>
					);
				})}
			</MenuList>
		</Menu>
	);
}

function PageHeaderDesktopUser() {
	const options = [
		{
			title: 'Dashboard',
			items: [
				{
					to: '/products',
					label: 'Shop All',
					icon: <FaProductHunt />,
				},
			],
		},
		{
			title: 'Account',
			items: [
				{
					to: '/account',
					label: 'My Account',
					icon: <FaUserAlt />,
				},
				{
					to: '/logout',
					label: 'Logout',
					icon: <FaSignOutAlt />,
				},
			].filter(Boolean),
		},
	].filter((v) => v);

	return <DesktopMenu options={options} />;
}

export default PageHeaderDesktopUser;
