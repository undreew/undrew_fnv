import React from 'react';
import {Button, VStack, useDisclosure} from '@chakra-ui/react';

import {Select} from 'components/Selects';
import SizeGuideModal from './SizeGuideModal';

import useGetParseColors from 'hooks/useGetParseColors';

function DetailProductSize(props) {
	const {data, onChange} = props;
	const {variants} = data || {};

	const {isOpen, onToggle} = useDisclosure();
	const {colors} = useGetParseColors(variants);

	return (
		<>
			<VStack>
				<Button variant='modimaGhost' alignSelf='end' onClick={onToggle}>
					Size Guide
				</Button>

				<Select
					name='product_color'
					placeholder='Sizes'
					options={colors}
					onChange={onChange}
				/>
			</VStack>

			<SizeGuideModal isOpen={isOpen} onToggle={onToggle} />
		</>
	);
}

export default DetailProductSize;
