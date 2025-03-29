import React from 'react';
import {FormControl, FormErrorMessage, Input} from '@chakra-ui/react';

import RegisterForm from './RegisterForm';
import useRegister from './useRegister';
import {InputPassword} from 'components/Input';

function RegisterUser() {
	const {
		handleChange,
		handleSubmit,
		handleBlur,
		errors,
		values,
		touched,
		isSubmitting,
	} = useRegister();

	return (
		<RegisterForm onSubmit={handleSubmit} isSubmitting={isSubmitting}>
			<FormControl isInvalid={touched.firstName && errors.firstName}>
				<Input
					type='text'
					name='firstName'
					variant='modimaFilled'
					placeholder='First Name'
					onBlur={handleBlur}
					disabled={isSubmitting}
					onChange={handleChange}
					defaultValue={values.firstName}
				/>
				<FormErrorMessage>
					{touched.firstName && errors.firstName}
				</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={touched.lastName && errors.lastName}>
				<Input
					type='text'
					name='lastName'
					variant='modimaFilled'
					placeholder='Last Name'
					onBlur={handleBlur}
					disabled={isSubmitting}
					onChange={handleChange}
					defaultValue={values.lastName}
				/>
				<FormErrorMessage>
					{touched.lastName && errors.lastName}
				</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={touched.email && errors.email}>
				<Input
					type='text'
					name='email'
					variant='modimaFilled'
					placeholder='Email'
					onBlur={handleBlur}
					disabled={isSubmitting}
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
					disabled={isSubmitting}
					onChange={handleChange}
					defaultValue={values.password}
				/>
				<FormErrorMessage>
					{touched.password && errors.password}
				</FormErrorMessage>
			</FormControl>
		</RegisterForm>
	);
}

export default RegisterUser;
