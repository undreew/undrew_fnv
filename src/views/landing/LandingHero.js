import React from 'react';
import {Box, Button, Text} from '@chakra-ui/react';

import styles from './LandingHero.module.scss';

function LandingHero() {
	return (
		<Box position='relative'>
			<Box className={styles['landing-hero']} />
			<Box
				sx={{
					top: '70%',
					left: '10%',
					position: 'absolute',
				}}
			>
				<Text textStyle='h3' style={{fontStyle: 'italic'}} color='white'>
					Elegance in simplicity
					<br />
					Earth's harmony
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
					New In
				</Button>
			</Box>
		</Box>
	);
}

export default LandingHero;
