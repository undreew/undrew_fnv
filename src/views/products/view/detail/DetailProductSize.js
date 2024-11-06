import React from 'react';
import {Box, VStack} from '@chakra-ui/react';

import {Select} from 'components/Selects';

import {ColorRadio} from 'components/Color';
import useGetParseSizes from 'hooks/useGetParseSizes';
import SizeGuide from './SizeGuide';

function DetailProductSize(props) {
	const {data, color, onChangeColor, onChangeSize} = props;
	const {variants} = data || {};

	const {sizes} = useGetParseSizes(variants, color);

	return (
		<Box mt={5}>
			<ColorRadio items={variants} onChange={onChangeColor} />

			<VStack>
				<SizeGuide />

				<Select
					key={sizes}
					options={sizes}
					placeholder='Sizes'
					name='product_color'
					onChange={onChangeSize}
				/>
			</VStack>
		</Box>
	);
}

export default DetailProductSize;
