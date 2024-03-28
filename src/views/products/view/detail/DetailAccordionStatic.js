import React from 'react';

import {
	Box,
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
} from '@chakra-ui/react';

function DetailAccordion(props) {
	const {data} = props;

	return (
		<Accordion variant='contact' allowMultiple>
			{(data || []).map((item, index) => {
				const {title, details} = item || {};

				return (
					<AccordionItem key={index}>
						<AccordionButton display='flex' justifyContent='space-between'>
							{title}
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel>{details}</AccordionPanel>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
}

function DetailAccordionStatic(props) {
	// const {data} = props;

	// const {fabric, shipping} = data || {};

	// const {made_in, materials, care, care_note} = fabric || {};
	// const {shipping_rate, returns} = shipping || {};

	return (
		<Box>
			<DetailAccordion
				data={[
					{
						title: 'Fitting',
						details: (
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Molestias architecto ipsum nisi quam ipsam deserunt? Temporibus,
								numquam reiciendis? Sunt, ipsa praesentium voluptate aut
								repellendus eum libero sint at qui? Ex architecto magnam,
								maiores ducimus atque suscipit repudiandae sapiente facilis
								doloremque alias sint ea rerum ipsa quas officiis voluptas odit
								distinctio?
							</span>
						),
					},
					{
						title: 'Fabric & Care',
						details: (
							<span>
								<p>Fabric:</p>
								<p>Tailored Stretched</p>
								<p>Italy 62% Nylon, 38% Elastane, 100% Vegan Materials</p>
								<p>Care:</p>
								<p>Cold Machine Wash, Line Dry</p>
								<p>
									Do not tumble dry or dry clean, do not use bleach or fabric
									softener
								</p>
							</span>
						),
					},
					{
						title: 'Product Details',
						details: (
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
								ipsam. Explicabo numquam, illo a maxime blanditiis, ipsa
								voluptate error aliquid, doloremque autem consectetur unde
								molestias minima praesentium? Repellendus error dignissimos,
								impedit pariatur quaerat omnis quibusdam repudiandae odit!
								Magnam ab ipsum perspiciatis optio, repellat laudantium dolor
								modi qui beatae cupiditate quas.
							</span>
						),
					},
					{
						title: 'Shipping Fee & Return',
						details: (
							<span>
								<p>Shipping:</p>
								<p>Is Free on US, Canada Orders Are $175</p>
								<p>Returns</p>
								<p>
									Unwashed, Unworn Items Are Eligible For Returns Or Exchanges
									Within 30 Days of Purchase. Final Sale Items are not Eligible
									For returns or exchanges.
								</p>
							</span>
						),
					},
				]}
			/>
		</Box>
	);
}

export default DetailAccordionStatic;
