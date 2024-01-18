import React from 'react';
import {LogoImage} from 'components/Logo';
import {Flex, HStack, Text} from '@chakra-ui/react';

import {FaSearch, FaRegUser, FaRegHeart, FaShoppingBag} from 'react-icons/fa';

function PageHeader() {
	return (
		<Flex justify='space-between' alignItems='center' paddingTop={2}>
			<LogoImage />

			<HStack>
				<Text>Test</Text>
			</HStack>

			<HStack>
				<FaSearch />

				<FaRegUser />

				<FaRegHeart />

				<FaShoppingBag />
			</HStack>
		</Flex>
	);
}

export default PageHeader;
