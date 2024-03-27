import React from 'react';
import {Box, Text} from '@chakra-ui/react';

import {truncate} from 'lodash';

import {ColorList} from 'components/Color';

function DetailProductStatic(props) {
	const {data} = props;
	const {name, full_description: description, variants} = data || {};

	return (
		<Box>
			<Box>
				<Text textStyle='h3'>{name}</Text>

				<Text textStyle='bodyLg' mt={2}>
					{truncate(description, {length: 500})}
				</Text>
			</Box>

			<ColorList mt={2} title='Colors' items={variants} />
		</Box>
	);
}

export default DetailProductStatic;
