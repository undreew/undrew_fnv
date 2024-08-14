import React, {useState} from 'react';
import {Box, Radio, RadioGroup, Stack, Text} from '@chakra-ui/react';

import {noop} from 'lodash';
import PropTypes from 'prop-types';

import useGetParseColors from 'hooks/useGetParseColors';

ColorRadio.propTypes = {
	items: PropTypes.array,
	title: PropTypes.string,
	onChange: PropTypes.func,
};

ColorRadio.defaultProps = {
	items: [],
	title: 'Colors',
	onChange: noop,
};

function ColorRadio({items = [], onChange, title}) {
	const [value, setValue] = useState(0);
	const {colors} = useGetParseColors(items);

	function handleChange(value) {
		setValue(value);
		onChange && onChange(colors[value]);
	}

	return (
		<Box>
			{title && <Text textStyle='bodyMd'>{title}</Text>}

			<RadioGroup
				gap={3}
				as={Stack}
				direction='row'
				value={parseInt(value)}
				onChange={handleChange}
			>
				{colors.map((color, index) => {
					return (
						<Radio
							size='lg'
							value={index}
							bgColor={color}
							colorScheme={color}
							key={`${index}-${color}`}
						/>
					);
				})}
			</RadioGroup>
		</Box>
	);
}

export default ColorRadio;
