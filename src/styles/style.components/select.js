import {selectAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} =
	createMultiStyleConfigHelpers(selectAnatomy.keys);

const modimaOutline = definePartsStyle({
	field: {
		border: '1px solid',
		borderColor: 'primary.600',
		borderRadius: 0,
	},
	icon: {},
});

const Select = defineMultiStyleConfig({
	variants: {
		modimaOutline,
	},
});

export default Select;
