import React from 'react';
import {HStack, Image, Text} from '@chakra-ui/react';

import img from 'assets/images/img.png';

function LogoImage() {
	return (
		<HStack>
			<Text
				textStyle='logo'
				color='neutral.gray404040'
				_hover={{color: 'neutral.gray202020'}}
				_selected={{color: 'neutral.gray0C0C0C'}}
			>
				modimal
			</Text>
			<Image src={img} width={5} height={5} />
		</HStack>
	);
}

export default LogoImage;
