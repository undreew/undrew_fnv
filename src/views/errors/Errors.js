import React from 'react';
import {Button, Stack, Text} from '@chakra-ui/react';

import {isEmpty} from 'lodash';
import {ERROR_STATUS} from 'constants/errors';
import {Link, Navigate, useParams} from 'react-router-dom';

// titles
const TITLE = {
	400: 'Bad Request',
	401: 'Authentication Required',
	403: 'Forbidden',
	404: 'Page Not Found',
	500: 'Internal Server Error',
	session: 'Session Expired',
	504: 'Gateway Timeout',
};

// descriptions
const DESCRIPTION = {
	400: `Sorry, the page you're looking for cannot be found.`,
	401: `Sorry, the page you're trying to access has restricted access.`,
	403: `Sorry, the page you're trying to access has restricted access.`,
	404: `Sorry, the page you're looking for cannot be found.`,
	500: "Sorry, the page you're looking for cannot be found.",
	session: `Your session has expired and your account has been disconnected. Please log in again.`,
	504: `Sorry, the page is taking too long to respond. Please try again later.`,
};

// actions
const ACTION = {
	400: (
		<Button variant='modimaOutline' to='/' as={Link}>
			Back to Home
		</Button>
	),
	401: (
		<Button variant='modimaOutline' to='/login' as={Link}>
			Go to Log in
		</Button>
	),
	403: (
		<Button variant='modimaOutline' to='/login' as={Link}>
			Go to Log in
		</Button>
	),
	404: (
		<Button variant='modimaOutline' to='/' as={Link}>
			Back to Home
		</Button>
	),
	500: (
		<Button variant='modimaOutline' to='/' as={Link}>
			Back to Home
		</Button>
	),
	session: (
		<Button variant='modimaOutline' to='/login' as={Link}>
			Go to Log in
		</Button>
	),
	504: (
		<Button variant='modimaOutline' to='/' as={Link}>
			Back to Home
		</Button>
	),
};

function Errors() {
	const {code} = useParams();

	const errorCode = ERROR_STATUS[code || '404'];

	if (isEmpty(errorCode)) return <Navigate to='/not-found' replace />;

	const title = TITLE[errorCode];
	const description = DESCRIPTION[errorCode];
	const action = ACTION[errorCode];

	return (
		<Stack direction='column' justify='center' textAlign='center' h='100vh'>
			<Text textStyle='display1'>{title}</Text>

			<Text textStyle='bodyXl'>{description}</Text>

			<div>{action}</div>
		</Stack>
	);
}

export default Errors;
