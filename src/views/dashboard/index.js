import React from 'react';

import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Container,
} from '@chakra-ui/react';

import {PrivateLayout} from 'components/Layouts';

function Index() {
	return (
		<PrivateLayout>
			<Container maxW='2xl'>
				<Accordion allowToggle variant='filter'>
					<AccordionItem>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Sort By
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Container>
		</PrivateLayout>
	);
}

export default Index;
