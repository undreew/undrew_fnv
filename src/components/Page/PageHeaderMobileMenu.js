import React from 'react';
import {Link} from 'react-router-dom';

import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
} from '@chakra-ui/react';

import {
	FaBars,
	FaRegUser,
	FaDashcube,
	FaRegAddressBook,
	FaHandHoldingHeart,
	FaRegQuestionCircle,
} from 'react-icons/fa';

function PageHeaderMobileMenu(props) {
	const {isAuth} = props;

	return (
		<Menu>
			<MenuButton
				as={IconButton}
				aria-label='Options'
				icon={<FaBars />}
				variant='ghost'
			/>
			<MenuList>
				{isAuth && (
					<MenuItem icon={<FaDashcube />} as={Link} to='/dashboard'>
						Dashboard
					</MenuItem>
				)}

				{!isAuth && (
					<MenuItem icon={<FaRegUser />} as={Link} to='/register'>
						Get Started
					</MenuItem>
				)}

				<MenuItem icon={<FaHandHoldingHeart />} as={Link} to='/sustainability'>
					Sustainability
				</MenuItem>

				<MenuItem icon={<FaRegAddressBook />} as={Link} to='/contact-us'>
					Contact Us
				</MenuItem>

				<MenuItem icon={<FaRegQuestionCircle />} as={Link} to='/faqs'>
					Faqs
				</MenuItem>
			</MenuList>
		</Menu>
	);
}

export default PageHeaderMobileMenu;
