import {Box, Text} from '@chakra-ui/react';
import React from 'react';

function DashboardUserCredentialsStatic(props) {
	const {data} = props;

	const {email, username} = data || {};

	return (
		<Box textAlign='left'>
			<Text textStyle='bodySm'>Email: {email}</Text>
			<Text textStyle='bodySm'>Username: {username}</Text>
		</Box>
	);
}

export default DashboardUserCredentialsStatic;
