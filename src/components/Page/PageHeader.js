import React from 'react';

import {NavLink} from 'react-router-dom';
import {LinkLogo} from 'components/Links';

import {Flex, HStack, IconButton, Text} from '@chakra-ui/react';
import {FaSearch, FaRegUser, FaRegHeart, FaShoppingBag} from 'react-icons/fa';

const links = [
	{label: 'Collection', to: '/collection'},
	{label: 'New In', to: '/new-in'},
	{label: 'Modiweek', to: '/modiweek'},
	{label: 'Plus Size', to: '/plus-size'},
	{label: 'Sustainability', to: '/sustainability'},
];

function PageHeader() {
	return (
		<Flex justify='space-between' alignItems='center' paddingTop={2}>
			<LinkLogo />

			<HStack gap={20}>
				{links.map((item, index) => {
					const {label, to} = item || {};
					return (
						<Text
							key={index}
							to={to}
							as={NavLink}
							fontFamily='heading'
							textStyle='bodyMd'
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

				<IconButton variant='ghost'>
					<FaRegUser />
				</IconButton>

				<IconButton variant='ghost'>
					<FaRegHeart />
				</IconButton>

				<IconButton variant='ghost'>
					<FaShoppingBag />
				</IconButton>
			</HStack>
		</Flex>
	);
}

export default PageHeader;
