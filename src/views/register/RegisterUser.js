import React from 'react';
import {FormControl, Input} from '@chakra-ui/react';

import RegisterForm from './RegisterForm';

function RegisterUser() {
	return (
		<RegisterForm gap={3}>
			<FormControl isInvalid={false}>
				<Input
					type='text'
					name='firstName'
					variant='modimaFilled'
					placeholder='First Name'
					onBlur={() => {}}
					onChange={() => {}}
					defaultValue={''}
				/>
			</FormControl>

			<FormControl isInvalid={false}>
				<Input
					type='text'
					name='lastName'
					variant='modimaFilled'
					placeholder='Last Name'
					onBlur={() => {}}
					onChange={() => {}}
					defaultValue={''}
				/>
			</FormControl>

			<FormControl isInvalid={false}>
				<Input
					type='text'
					name='email'
					variant='modimaFilled'
					placeholder='Email'
					onBlur={() => {}}
					onChange={() => {}}
					defaultValue=''
				/>
			</FormControl>

			<FormControl isInvalid={false}>
				<Input
					name='email'
					type='password'
					variant='modimaFilled'
					placeholder='Password'
					onBlur={() => {}}
					onChange={() => {}}
					defaultValue=''
				/>
			</FormControl>
		</RegisterForm>
	);
}

export default RegisterUser;
