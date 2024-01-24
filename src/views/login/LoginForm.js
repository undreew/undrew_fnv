import React from 'react';
import {Link} from 'react-router-dom';
import {Button, HStack, IconButton, Text, VStack} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import {FaApple, FaFacebook, FaGoogle} from 'react-icons/fa';

LoginForm.propTypes = {
	onSubmit: PropTypes.func,
	isSubmitting: PropTypes.bool,
};

function LoginForm(props) {
	const {children, onSubmit, isSubmitting, ...rest} = props;

	return (
		<VStack as='form' gap={3} onSubmit={onSubmit} {...rest}>
			{children}

			<Button
				mt={2}
				type='submit'
				variant='modimaSolid'
				isLoading={isSubmitting}
				isDisabled={isSubmitting}
			>
				Register
			</Button>

			<VStack>
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
					New to Modimal?{' '}
					<Text color='base.primary' as={Link} fontWeight='500' to='/register'>
						Create an account
					</Text>
				</Text>
			</VStack>
		</VStack>
	);
}

export default LoginForm;
