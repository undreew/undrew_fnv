import {Text} from '@chakra-ui/react';
import {GuestFormContainer} from 'components/Guests';
import React from 'react';
import LoginUser from './LoginUser';

function Login() {
	return (
		<GuestFormContainer>
			<Text textStyle='h3' fontFamily='heading' mb={5} textAlign='center'>
				Log In
			</Text>

			<LoginUser />
		</GuestFormContainer>
	);
}

export default Login;
