import React from 'react';
import {Text} from '@chakra-ui/react';

import RegisterUser from './RegisterUser';
import {GuestFormContainer} from 'components/Guests';

function Register() {
	return (
		<GuestFormContainer>
			<Text textStyle='h3' fontFamily='heading' mb={5} textAlign='center'>
				Create Account
			</Text>

			<RegisterUser />
		</GuestFormContainer>
	);
}

export default Register;
