import React from 'react';
import {HStack, Image, Text} from '@chakra-ui/react';

import img from 'assets/images/img.png';

function LogoImage() {
	return (
		<HStack>
			<Text fontSize='32px' fontWeight='bold'>
				modimal
			</Text>
			<Image src={img} width={5} height={5} />
		</HStack>
	);
}

export default LogoImage;
