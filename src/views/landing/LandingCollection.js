import React from 'react';
import {XBlock, XMasonry} from 'react-xmasonry';
import {Box, Button, Image} from '@chakra-ui/react';

import blouses from '../../assets/images/collection/Lifestyle_Detail_Something_Tailored_Shirt_White_1400x.webp';
import pants from '../../assets/images/collection/Moodboard2_71ade389-dc80-49eb-b7e8-1c90a0273a2a_700x.webp';
import dress from '../../assets/images/collection/Save_The_Date_Dress_Khaki_Lifestyle_Khaki_Main_720x.webp';
import outwear from '../../assets/images/collection/ezgif-2-f137fd9d7d.png';

import {map} from 'lodash';

const COLLECTION_ITEMS = [
	{
		src: blouses,
		height: 400,
		alt: 'Blouses',
	},
	{
		src: pants,
		height: 700,
		alt: 'Pants',
	},
	{
		src: dress,
		height: 600,
		alt: 'Dresses',
	},
	{
		src: outwear,
		height: 300,
		alt: 'Outwear',
	},
];

function CollectionItem(props) {
	return (
		<Box position='relative'>
			<Image
				p={2}
				w='100%'
				loading='lazy'
				objectFit='cover'
				objectPosition='40% 15%'
				{...props}
			/>
			<Button
				sx={{
					mt: 2,
					borderRadius: 0,
					fontsize: '14px',
					fontFamily: 'heading',
					position: 'absolute',
					bottom: '30px',
					right: '30px',
				}}
				variant='solid'
				size={['sm', 'md']}
			>
				{props.alt}
			</Button>
		</Box>
	);
}

function LandingCollection() {
	return (
		<Box>
			<XMasonry maxColumns={2}>
				{map(COLLECTION_ITEMS, (item, index) => {
					return (
						<XBlock key={index}>
							<CollectionItem {...item} />
						</XBlock>
					);
				})}
			</XMasonry>
		</Box>
	);
}

export default LandingCollection;
