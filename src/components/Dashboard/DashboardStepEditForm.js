import {Box, Button, HStack, Text} from '@chakra-ui/react';
import React from 'react';

function DashboardStepEditForm(props) {
	const {children, title, ...rest} = props;

	return (
		<Box {...rest}>
			<HStack justify='space-between'>
				<Text textStyle='bodyLg'>{title}</Text>

				<Button variant='outline'>Edit</Button>
			</HStack>

			{children}
		</Box>
	);
}

export default DashboardStepEditForm;
