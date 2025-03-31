import React from 'react';
import {HStack, Text} from '@chakra-ui/react';

function SearchHeader({count, title}) {
	return (
		<HStack justifyContent='center' my={14}>
			<Text textStyle='bodyXl'>
				{count} {count > 1 ? 'items' : 'item'} found for "{title}"
			</Text>
		</HStack>
	);
}

export default SearchHeader;
