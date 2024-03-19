import React from 'react';
import {Box, HStack, Text} from '@chakra-ui/react';

import PropTypes from 'prop-types';

ColorList.defaultProps = {
	title: 'Colors',
};

ColorList.propTypes = {
	title: PropTypes.string,
	colors: PropTypes.array,
};

function ColorList(props) {
	const {title, colors, ...rest} = props;

	return (
		<Box {...rest}>
			<Text textStyle='bodyMd'>{title}</Text>

			<HStack gap={2} wrap='nowrap'>
				{(colors || []).map((color, index) => {
					const {name} = color || {};
					return (
						<Box
							w='25px'
							height='25px'
							borderRadius='50%'
							bgColor={name}
							color={name}
							key={index}
						/>
					);
				})}
			</HStack>
		</Box>
	);
}

export default ColorList;
