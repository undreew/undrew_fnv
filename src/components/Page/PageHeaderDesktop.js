import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import {LinkLogo} from 'components/Links';
import {Divider, HStack, IconButton, Text} from '@chakra-ui/react';
import {FaRegUser, FaRegHeart, FaShoppingBag, FaDashcube} from 'react-icons/fa';

import PageHeaderDesktopMenu from './PageHeaderDesktopMenu';

const links = [
	{label: 'Collection', to: '/collection'},
	{label: 'New In', to: '/new-in'},
	// {label: 'Modiweek', to: '/modiweek'},
	// {label: 'Plus Size', to: '/plus-size'},
	{label: 'Sustainability', to: '/sustainability'},
];

function PageHeaderDesktop(props) {
	const {isAuth} = props;

	return (
		<>
			<LinkLogo />

			<HStack gap={20} display={['none', 'none', 'none', 'flex', 'flex']}>
				{(links || []).map((item, index) => {
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
				{!isAuth && (
					<>
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
					</>
				)}

				{isAuth && (
					<>
						<IconButton
							as={Link}
							to='/dashboard'
							variant='ghost'
							aria-label='Dashboard'
						>
							<FaDashcube />
						</IconButton>

						<Divider
							orientation='vertical'
							colorScheme='green'
							size='lg'
							h='20px'
						/>
					</>
				)}

				{isAuth && <PageHeaderDesktopMenu isAuth={isAuth} />}
			</HStack>
		</>
	);
}

export default PageHeaderDesktop;
