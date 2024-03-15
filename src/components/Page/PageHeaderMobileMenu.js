import React from 'react';
import {Link} from 'react-router-dom';

import {
	Menu,
	MenuList,
	MenuItem,
	IconButton,
	MenuButton,
} from '@chakra-ui/react';

import {
	FaBars,
	FaRegUser,
	FaDashcube,
	FaSignOutAlt,
	FaRegAddressBook,
	FaHandHoldingHeart,
	FaRegQuestionCircle,
} from 'react-icons/fa';

function MobileMenu({items}) {
	return (
		<Menu>
			<MenuButton
				variant='ghost'
				as={IconButton}
				icon={<FaBars />}
				aria-label='Mobile Menu'
			/>
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

function PageHeaderMobileMenu(props) {
	const {isAuth} = props;

	const items = [
		isAuth && {
			to: '/products',
			label: 'Dashboard',
			icon: <FaDashcube />,
		},
		!isAuth && {
			to: '/register',
			label: 'Register',
			icon: <FaRegUser />,
		},
		{
			to: '/sustainability',
			label: 'Sustainability',
			icon: <FaHandHoldingHeart />,
		},
		{
			to: '/contact-us',
			label: 'Contact Us',
			icon: <FaRegAddressBook />,
		},
		{
			to: '/faqs',
			label: 'Faqs',
			icon: <FaRegQuestionCircle />,
		},
		isAuth && {
			to: '/logout',
			label: 'Logout',
			icon: <FaSignOutAlt />,
		},
	].filter((v) => v);

	return <MobileMenu items={items} />;
}

export default PageHeaderMobileMenu;
