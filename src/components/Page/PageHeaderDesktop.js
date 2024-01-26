import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import {LinkLogo} from 'components/Links';
import {HStack, IconButton, Text} from '@chakra-ui/react';
import {FaSearch, FaRegUser, FaRegHeart, FaShoppingBag} from 'react-icons/fa';

function PageHeaderDesktop(props) {
	const {items} = props;

	return (
		<>
			<LinkLogo />

			<HStack gap={20} display={['none', 'none', 'none', 'flex', 'flex']}>
				{(items || []).map((item, index) => {
					const {label, to} = item || {};
					return (
						<Text
							to={to}
							key={index}
							as={NavLink}
							textStyle='bodyMd'
							fontFamily='heading'
						>
							{label}
						</Text>
					);
				})}
			</HStack>

			<HStack gap={5}>
				<IconButton variant='ghost'>
					<FaSearch />
				</IconButton>

				<IconButton variant='ghost' as={Link} to='/register'>
					<FaRegUser />
				</IconButton>

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

export default PageHeaderDesktop;
