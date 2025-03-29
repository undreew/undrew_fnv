import {accordionAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} =
	createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
	container: {
		fontFamily: 'heading',
	},
});

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
		borderWidth: '1px',
		borderColor: 'base.primary',
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
			color: 'base.primary',
		},
	},

	container: {
		bgColor: 'primary.25',
		borderColor: 'neutral.grayCBCBCB',
	},

	icon: {},
});

const mobileLink = definePartsStyle({
	root: {},

	button: {
		borderColor: 'neutral.grayCBCBCB',
		borderBottom: '1px solid',
	},

	container: {
		border: 0,
	},
});

const Accordion = defineMultiStyleConfig({
	baseStyle,
	variants: {
		filter,
		contact,
		mobileLink,
	},
});

export default Accordion;
