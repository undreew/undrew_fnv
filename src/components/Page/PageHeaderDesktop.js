import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import {LinkLogo} from 'components/Links';
import {HStack, IconButton, Text} from '@chakra-ui/react';
import {FaRegUser, FaRegHeart, FaShoppingBag, FaDashcube} from 'react-icons/fa';

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
				<IconButton
					as={Link}
					variant='ghost'
					to='/dashboard'
					aria-label='Dashboard'
				>
					<FaDashcube />
				</IconButton>

				<IconButton
					as={Link}
					to='/register'
					variant='ghost'
					aria-label='Register'
				>
					<FaRegUser />
				</IconButton>

				<IconButton
					as={Link}
					variant='ghost'
					to='/favorites'
					aria-label='Favorites'
				>
					<FaRegHeart />
				</IconButton>

				<IconButton
					as={Link}
					to='/cart'
					variant='ghost'
					aria-label='Add to Cart'
				>
					<FaShoppingBag />
				</IconButton>
			</HStack>
		</>
	);
}

export default PageHeaderDesktop;
