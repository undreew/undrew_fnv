import {
	defineStyleConfig,
	createMultiStyleConfigHelpers,
} from '@chakra-ui/react';

import {inputAnatomy} from '@chakra-ui/anatomy';

/* INPUT */
const {definePartsStyle, defineMultiStyleConfig} =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const inputBaseStyle = definePartsStyle({
	field: {
		borderRadius: 0,
		fontSize: '12px',
		fontFamily: 'heading',
		/* CUSTOM INPUT */
		// border: '1px solid',
		// borderColor: 'base.primary',
		// p: 3,
	},
});

export const Input = defineMultiStyleConfig({
	baseStyle: inputBaseStyle,
});

/* BUTTON */
export const Button = defineStyleConfig({
	baseStyle: {
		borderRadius: 0,
	},
});
