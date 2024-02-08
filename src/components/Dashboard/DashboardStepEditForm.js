import {Box, Button, HStack, Text} from '@chakra-ui/react';
import React from 'react';
import {withSteps} from './DashboadStepFormContext';

function DashboardStepEditForm(props) {
	const {children, title, step, handleEdit} = props;

	return (
		<Box>
			<HStack justify='space-between'>
				<Text textStyle='bodyLg'>{title}</Text>

				<Button
					variant='outline'
					onClick={() => {
						handleEdit(step);
					}}
				>
					Edit
				</Button>
			</HStack>

			{children}
		</Box>
	);
}

export default withSteps(DashboardStepEditForm);
