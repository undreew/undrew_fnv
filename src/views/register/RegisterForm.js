import React from 'react';
import {Link} from 'react-router-dom';
import {Button, HStack, IconButton, Text, VStack} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import {FaApple, FaFacebook, FaGoogle} from 'react-icons/fa';

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
				width='100%'
				type='submit'
				variant='modimaSolid'
				isLoading={isSubmitting}
				isDisabled={isSubmitting}
			>
				Register
			</Button>

			<VStack textAlign='center'>
				<Text textStyle='bodySm' mt={2}>
					Already have an account?{' '}
					<Text as={Link} to='/login' fontWeight='500' textStyle='link'>
						Login
					</Text>
				</Text>

				<Text textStyle='bodySm'>or</Text>

				<HStack>
					<IconButton variant='ghost' borderRadius={0} colorScheme='blackAlpha'>
						<FaApple />
					</IconButton>

					<IconButton variant='ghost' borderRadius={0} colorScheme='orange'>
						<FaGoogle />
					</IconButton>

					<IconButton variant='ghost' borderRadius={0} colorScheme='facebook'>
						<FaFacebook />
					</IconButton>
				</HStack>

				<Text textStyle='bodySm'>
					By clicking Register, you agree to{' '}
					<Text textStyle='link' as={Link} fontWeight='500'>
						Terms & Conditions
					</Text>{' '}
					and{' '}
					<Text textStyle='link' as={Link} fontWeight='500'>
						Privacy Policy.
					</Text>
				</Text>
			</VStack>
		</VStack>
	);
}

export default RegisterForm;
