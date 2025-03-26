import React from 'react';
import {Box, HStack, Text} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import useGetParseColors from 'hooks/useGetParseColors';

ColorList.propTypes = {
	title: PropTypes.string,
	colors: PropTypes.array,
};

function ColorList(props) {
	const {items, title, ...rest} = props;

	const {colors} = useGetParseColors(items);

	return (
		<Box {...rest}>
			{title && <Text textStyle='bodyMd'>{title}</Text>}

			<HStack gap={2} wrap='nowrap'>
				{(colors || []).map((color, index) => {
					return (
						<Box
							w='20px'
							height='20px'
							borderRadius='50%'
							bgColor={color}
							color={color}
							key={index}
						/>
					);
				})}
			</HStack>
		</Box>
	);
}

export default ColorList;
