import React from 'react';

import RegisterUser from './RegisterUser';
import {GuestFormContainer} from 'components/Guests';

function Register() {
	return (
		<GuestFormContainer title='Create Account'>
			<RegisterUser />
		</GuestFormContainer>
	);
}

export default Register;
