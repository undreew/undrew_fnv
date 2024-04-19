import {cardAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} =
	createMultiStyleConfigHelpers(cardAnatomy.keys);

const modimaCard = definePartsStyle({
	container: {
		borderRadius: 'xs',
		boxShadow: 'lg',

		_dark: {
			border: '1px solid',
			borderColor: 'primary.50',
		},
	},
	header: {},
	body: {},
	footer: {},
});

const Card = defineMultiStyleConfig({
	variants: {
		modimaCard,
	},
});

export default Card;
