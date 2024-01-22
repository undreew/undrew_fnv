import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

import {inputAnatomy} from '@chakra-ui/anatomy';

/* INPUT */
const {definePartsStyle, defineMultiStyleConfig} =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const modima = definePartsStyle({
	field: {
		borderRadius: 0,
		border: '1px solid',
		color: 'neutral.gray606060',
		borderColor: 'neutral.gray606060',

		fontSize: '14px',
		fontWeight: 500,
		fontFamily: 'heading',

		_placeholder: {
			color: 'neutral.grayADADAD',
		},
		_focus: {
			borderColor: 'primary.400',
		},
		disabled: {
			cursor: 'not-allowed',
			borderColor: 'neutral.grayCBCBCB',
		},
		_invalid: {
			color: 'error.main',
			borderColor: 'error.main',
		},

		_dark: {
			color: 'primary.50',
			borderColor: 'primary.50',
			_hover: {
				borderColor: 'primary.200',
			},
			_focus: {
				borderColor: 'primary.400',
			},
		},
	},
});

const modimaFlush = definePartsStyle({
	field: {
		borderRadius: 0,
		borderBottom: '1px solid',
		color: 'neutral.gray606060',
		borderColor: 'neutral.gray606060',

		fontSize: '14px',
		fontWeight: 500,
		fontFamily: 'heading',

		_placeholder: {
			color: 'neutral.grayADADAD',
		},
		_focus: {
			borderColor: 'primary.400',
		},
	},
});

const Input = defineMultiStyleConfig({
	variants: {modima, modimaFlush},
});

export default Input;
