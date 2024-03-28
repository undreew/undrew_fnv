import {
	Badge,
	HStack,
	Accordion,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
} from '@chakra-ui/react';
import React from 'react';

function DetailProductMaterial() {
	return (
		<Accordion variant='contact' allowToggle>
			<AccordionItem>
				<AccordionButton display='flex' justifyContent='space-between'>
					Silk
					<AccordionIcon />
				</AccordionButton>

				<AccordionPanel>
					<p>
						This material is our signature high-stretch fabric that drapes like
						silk and is soft to touch. Silk is OEKO-TEX certified and made in
						Italy, in a mill 100% powered by renewable energy (Solar and
						Biomass)
					</p>

					<HStack mt={2}>
						<Badge variant='outline'>Quick Dry</Badge>
						<Badge variant='outline'>Chemical Free</Badge>
						<Badge variant='outline'>Machine Washable</Badge>
					</HStack>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
}

export default DetailProductMaterial;
