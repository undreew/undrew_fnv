import React from 'react';
import {Box, Button, Text, VStack} from '@chakra-ui/react';

import styles from './LandingSustainability.module.scss';

function LandingSustainability() {
	return (
		<Box position='relative'>
			<Box className={styles['landing-sustainability']} />
			<VStack
				sx={{
					alignItems: 'flex-end',
					justifyContent: 'flex-end',
					padding: ['1rem 1.5rem', '1rem 2rem', '1rem 1rem'],
				}}
				position='absolute'
				right={{base: '3%', md: '5%', xl: '12%'}}
				bottom={{base: '1.2rem', md: '2rem', lg: '3rem', xl: '3.5rem'}}
			>
				<Text
					textStyle='bodyXl'
					sx={{
						textAlign: 'right',
						color: 'primary.800',
					}}
				>
					Stylish sustainability in clothing promotes eco-friendly choices for a
					greater future
				</Text>
				<Button
					sx={{
						mt: 2,
						borderRadius: 0,
						fontsize: '14px',
						fontFamily: 'heading',
					}}
					variant='solid'
					size={['sm', 'md']}
				>
					Sustainability
				</Button>
			</VStack>
		</Box>
	);
}

export default LandingSustainability;
