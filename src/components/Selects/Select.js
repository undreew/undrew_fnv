import React from 'react';
import {Select as ChakraSelect} from '@chakra-ui/react';

import {isArray, keys, startCase} from 'lodash';

Select.defaultProps = {
	name: 'select',
	variant: 'modimaOutline',
};

function Select(props) {
	const {name, variant, options, onChange, placeholder} = props;

	function getOptions(options) {
		return (isArray(options) ? options : keys(options)).map((option) => {
			return {
				value: option,
				label: startCase(option),
			};
		});
	}

	function handleChange(e) {
		const value = e.target.value;
		if (onChange) onChange(value);
	}

	const _options = getOptions(options);

	return (
		<ChakraSelect
			name={name}
			variant={variant}
			onChange={handleChange}
			placeholder={placeholder}
		>
			{(_options || []).map((option, index) => {
				const {label, value} = option || {};
				return (
					<option key={index} value={value}>
						{label}
					</option>
				);
			})}
		</ChakraSelect>
	);
}

export default Select;
