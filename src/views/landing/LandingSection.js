import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Text, HStack, Button, Container} from '@chakra-ui/react';

function LandingSection(props) {
	const {children, title, action} = props;

	return (
		<Box sx={{minHeight: '450px', padding: '2rem'}}>
			<Container
				maxW={{
					sm: '2xl',
					md: '4xl',
					lg: '7xl',
				}}
			>
				<HStack justify='space-between' mb={5}>
					{!!title && <Text textStyle='h3'>{title}</Text>}

					{!!action && (
						<Button variant='modimaGhost' as={Link} to='/products'>
							View All
						</Button>
					)}
				</HStack>

				{children}
			</Container>
		</Box>
	);
}

export default LandingSection;
