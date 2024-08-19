import React from 'react';

import {Box, VStack} from '@chakra-ui/react';
import {Button, useDisclosure} from '@chakra-ui/react';

import {Select} from 'components/Selects';
import SizeGuideModal from './SizeGuideModal';

import {ColorRadio} from 'components/Color';
import useGetParseSizes from 'hooks/useGetParseSizes';

function DetailProductSize(props) {
	const {data, color, onChangeColor, onChangeSize} = props;
	const {variants} = data || {};

	const {isOpen, onToggle} = useDisclosure();

	const {sizes} = useGetParseSizes(variants, color);

	return (
		<Box mt={5}>
			<ColorRadio items={variants} onChange={onChangeColor} />

			<VStack>
				<Button variant='modimaGhost' alignSelf='end' onClick={onToggle}>
					Size Guide
				</Button>

				<Select
					key={sizes}
					options={sizes}
					placeholder='Sizes'
					name='product_color'
					onChange={onChangeSize}
				/>
			</VStack>

			<SizeGuideModal isOpen={isOpen} onToggle={onToggle} />
		</Box>
	);
}

export default DetailProductSize;
