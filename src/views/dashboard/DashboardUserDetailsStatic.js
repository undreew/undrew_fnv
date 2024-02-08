import {Box, Text} from '@chakra-ui/react';
import React from 'react';

function DashboardUserReview(props) {
	const {data} = props;

	const {firstName, lastName} = data || {};

	return (
		<Box textAlign='left' mb={3}>
			<Text textStyle='bodySm'>First Name: {firstName}</Text>
			<Text textStyle='bodySm'>Last Name: {lastName}</Text>
		</Box>
	);
}

export default DashboardUserReview;
