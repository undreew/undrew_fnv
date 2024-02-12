import {accordionAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} =
	createMultiStyleConfigHelpers(accordionAnatomy.keys);

const filter = definePartsStyle({
	root: {},

	button: {
		bgColor: 'base.primary',
		color: 'base.white',
		textStyle: 'h6',

		_hover: null,
		_expanded: {
			bgColor: 'base.white',
			color: 'base.primary',
		},
	},

	container: {
		border: '1px solid gray',
	},

	icon: {},
});

const contact = definePartsStyle({
	root: {},

	button: {
		bgColor: 'primary.50',
		color: 'base.black',
		textStyle: 'captionLg',

		_hover: null,
		_expanded: {
			bgColor: 'primary.25',
			color: 'base.black',
		},
	},

	container: {
		bgColor: 'primary.25',
		borderColor: 'primary.25',
	},

	icon: {},
});

const Accordion = defineMultiStyleConfig({
	variants: {
		filter,
		contact,
	},
});

export default Accordion;
