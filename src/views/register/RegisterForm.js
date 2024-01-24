import React from 'react';
import {Button, Text, VStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function RegisterForm(props) {
	const {children, onSubmit, isDisabled, isSubmitting, ...rest} = props;

	return (
		<VStack as='form' onSubmit={onSubmit} {...rest}>
			{children}

			<Button
				mt={2}
				bg='primary.600'
				color='base.white'
				fontFamily='heading'
				variant='modimaSolid'
				disabled={isDisabled || isSubmitting}
			>
				Register
			</Button>

			<Text fontSize='sm' textAlign='center' mt={2}>
				Already have an account?{' '}
				<Text as={Link} to='/login' color='base.primary' fontWeight='500'>
					Login
				</Text>
			</Text>
		</VStack>
	);
}

export default RegisterForm;
