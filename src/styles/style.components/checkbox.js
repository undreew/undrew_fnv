import {checkboxAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers, defineStyle} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} =
	createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const modima = definePartsStyle({
	control: defineStyle({
		border: '1px solid',
		borderColor: 'primary.200',

		_hover: null,

		_checked: {
			borderColor: 'primary.400',
			bgColor: 'primary.400',
			color: 'primary.400',

			_hover: null,
		},

		_disabled: {
			borderColor: 'neutral.grayCBCBCB',
			bgColor: 'neutral.grayCBCBCB',
			color: 'neutral.grayCBCBCB',
		},
	}),

	icon: defineStyle({}),

	container: defineStyle({}),

	label: defineStyle({}),
});

const Checkbox = defineMultiStyleConfig({
	variants: {
		modima,
	},
});

export default Checkbox;
