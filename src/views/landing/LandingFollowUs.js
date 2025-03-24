import React from 'react';
import {XBlock, XMasonry} from 'react-xmasonry';
import {Box, Image, SimpleGrid, useBreakpointValue} from '@chakra-ui/react';

import f1 from '../../assets/images/follow-us/Frame 427319383.png';
import f2 from '../../assets/images/follow-us/2.jpg';
import f3 from '../../assets/images/follow-us/3.jpg';
import f4 from '../../assets/images/follow-us/4.jpg';
import f5 from '../../assets/images/follow-us/5.webp';

import {dropRight, map} from 'lodash';

const FOLLOW_US_ITEMS = [
	{
		src: f1,
		height: 630,
		alt: 'Woman dressed in semi formal attire.',
	},
	{
		src: f2,
		height: 315,
		alt: 'Woman on a bike.',
	},
	{
		src: f3,
		height: 315,
		alt: 'Woman in a wardrobe',
	},
	{
		src: f4,
		height: 315,
		alt: 'Semi formal attire for a woman.',
	},
	{
		src: f5,
		height: 315,
		alt: 'Woman on a beach.',
	},
];

function FollowUsImage(props) {
	return (
		<Image
			loading='lazy'
			style={{objectFit: 'cover', objectPosition: '40% 15%'}}
			{...props}
		/>
	);
}

function LandingFollowUs() {
	const isMobile = useBreakpointValue({sm: true, md: false});

	if (isMobile) {
		return (
			<SimpleGrid columns={{base: 1, sm: 2}} spacing={2}>
				{map(dropRight(FOLLOW_US_ITEMS), (item, index) => {
					return (
						<FollowUsImage key={index} {...item} height={350} width={350} />
					);
				})}
			</SimpleGrid>
		);
	}

	return (
		<Box>
			<XMasonry maxColumns={3}>
				{FOLLOW_US_ITEMS.map((item, index) => {
					return (
						<XBlock>
							<FollowUsImage key={index} width='100%' {...item} />
						</XBlock>
					);
				})}
			</XMasonry>
		</Box>
	);
}

export default LandingFollowUs;
