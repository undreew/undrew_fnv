import {GuestFormContainer} from 'components/Guests';
import React from 'react';
import LoginUser from './LoginUser';

function Login() {
	return (
		<GuestFormContainer title='Log In'>
			<LoginUser />
		</GuestFormContainer>
	);
}

export default Login;
