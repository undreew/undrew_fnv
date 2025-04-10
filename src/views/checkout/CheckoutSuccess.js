import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Stack, Text} from '@chakra-ui/react';

function CheckoutSuccess() {
	return (
		<Stack
			sx={{
				h: '100vh',
				direction: 'column',
				textAlign: 'center',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text textStyle='display1'>Checkout Successful!</Text>
			<Button variant='modimaOutline' as={Link} to='/products'>
				Shop More
			</Button>
		</Stack>
	);
}

export default CheckoutSuccess;
