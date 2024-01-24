import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Text, VStack} from '@chakra-ui/react';

import PropTypes from 'prop-types';

RegisterForm.propTypes = {
	onSubmit: PropTypes.func,
	isSubmitting: PropTypes.bool,
};

function RegisterForm(props) {
	const {children, onSubmit, isSubmitting, ...rest} = props;

	return (
		<VStack as='form' gap={3} onSubmit={onSubmit} {...rest}>
			{children}

			<Button
				mt={2}
				type='submit'
				bg='primary.600'
				color='base.white'
				fontFamily='heading'
				variant='modimaSolid'
				isLoading={isSubmitting}
				isDisabled={isSubmitting}
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
