import React from 'react';
import {Box, Text} from '@chakra-ui/react';

import {truncate} from 'lodash';

function DetailProductStatic(props) {
	const {data} = props;
	const {name, full_description: description} = data || {};

	return (
		<Box>
			<Box>
				<Text textStyle='h3'>{name}</Text>

				<Text textStyle='bodyLg' mt={2}>
					{truncate(description, {length: 500})}
				</Text>
			</Box>
		</Box>
	);
}

export default DetailProductStatic;
