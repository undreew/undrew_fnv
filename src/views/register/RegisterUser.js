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
					variant='outline'
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
					variant='outline'
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
					variant='outline'
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
					variant='outline'
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
