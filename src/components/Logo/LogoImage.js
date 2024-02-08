import React from 'react';
import {HStack, Image, Text, useColorMode} from '@chakra-ui/react';

import img from 'assets/images/img.png';

function LogoImage() {
	const {colorMode} = useColorMode();
	const isLightMode = colorMode === 'light';

	return (
		<HStack>
			<Text
				textStyle='logo'
				color={isLightMode ? 'neutral.gray404040' : 'neutral.white'}
				_hover={{color: isLightMode && 'neutral.gray202020'}}
				_selected={{color: isLightMode && 'neutral.gray0C0C0C'}}
			>
				modimal
			</Text>
			<Image src={img} width={5} height={5} />
		</HStack>
	);
}

export default LogoImage;
