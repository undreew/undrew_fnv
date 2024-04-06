import {
	Box,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import {FaArrowRight} from 'react-icons/fa';

function PageFooter() {
	return (
		<SimpleGrid
			columns={2}
			p={5}
			gap={5}
			color='white'
			bgColor='neutral.gray404040'
		>
			<Box>
				<Text>Join Our Club, Get 15% Off For Your Birthday</Text>

				<InputGroup>
					<Input
						variant='modimaFilled'
						placeholder='Enter your email address'
					/>

					<InputRightElement>
						<IconButton variant='text'>
							<FaArrowRight />
						</IconButton>
					</InputRightElement>
				</InputGroup>
			</Box>
			<Box>2</Box>
		</SimpleGrid>
	);
}

export default PageFooter;
