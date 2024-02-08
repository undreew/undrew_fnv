import React from 'react';
import {Link} from 'react-router-dom';
import {FormControl, FormErrorMessage, Input, Text} from '@chakra-ui/react';

import LoginForm from './LoginForm';
import useLogin from './useLogin';

import {InputPassword} from 'components/Input';

function LoginUser() {
	const {
		handleChange,
		handleSubmit,
		handleBlur,
		errors,
		values,
		touched,
		isSubmitting,
	} = useLogin();

	return (
		<LoginForm onSubmit={handleSubmit} isSubmitting={isSubmitting}>
			<FormControl isInvalid={touched.email && errors.email}>
				<Input
					name='email'
					type='email'
					variant='modimaFilled'
					placeholder='Email'
					onBlur={handleBlur}
					onChange={handleChange}
					defaultValue={values.email}
				/>
				<FormErrorMessage>{touched.email && errors.email}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={touched.password && errors.password}>
				<InputPassword
					name='password'
					variant='modimaFilled'
					placeholder='Password'
					onBlur={handleBlur}
					onChange={handleChange}
					defaultValue={values.password}
				/>
				<FormErrorMessage>
					{touched.password && errors.password}
				</FormErrorMessage>
			</FormControl>

			<Text textStyle='bodySm' alignSelf='flex-start' as={Link}>
				Forgot your password?
			</Text>
		</LoginForm>
	);
}

export default LoginUser;
