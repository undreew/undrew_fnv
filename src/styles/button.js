import {defineStyle, defineStyleConfig} from '@chakra-ui/react';

const modimaSolid = defineStyle({
	color: 'neutral.white',

	w: '100%',

	borderRadius: 0,
	backgroundColor: 'primary.600',

	fontSize: '14px',
	fontFamily: 'heading',
	fontWeight: 'regular',

	_hover: {
		backgroundColor: 'primary.700',
		_disabled: {
			cursor: 'not-allowed',
			backgroundColor: 'neutral.grayCBCBCB',
		},
	},
	_selected: {
		backgroundColor: 'primary.750',
	},
	_disabled: {
		color: 'neutral.gray404040',
		backgroundColor: 'neutral.grayCBCBCB',
	},

	_dark: {
		color: 'neutral.black',
		backgroundColor: 'neutral.white',
		_hover: {
			backgroundColor: 'neutral.grayEDEDED',
		},
		_selected: {
			backgroundColor: 'neutral.grayDFDFDF',
		},
		_disabled: {
			color: 'neutral.grayADADAD',
			backgroundColor: 'neutral.gray606060',
		},
	},
});

const modimaOutline = defineStyle({
	color: 'primary.600',

	border: '1px solid',
	borderColor: 'primary.600',
	borderRadius: 0,

	fontSize: '14px',
	fontFamily: 'heading',
	fontWeight: 'regular',

	_hover: {
		color: 'primary.700',
		borderColor: 'primary.700',
	},
	_selected: {
		color: 'primary.750',
		borderColor: 'primary.750',
	},
	_disabled: {
		color: 'neutral.gray404040',
		borderColor: 'neutral.gray404040',
	},

	_dark: {
		color: 'neutral.white',
		borderColor: 'neutral.white',
		_hover: {
			color: 'neutral.grayEDEDED',
			borderColor: 'neutral.grayEDEDED',
		},
		_selected: {
			color: 'neutral.grayDFDFDF',
			borderColor: 'neutral.grayDFDFDF',
		},
	},
});

const modimaGhost = defineStyle({
	color: 'primary.600',

	fontSize: '14px',
	fontFamily: 'heading',
	fontWeight: 'regular',

	_hover: {
		color: 'primary.700',
		_disabled: {
			color: 'neutral.gray868686',
		},
	},
	_selected: {
		color: 'primary.750',
	},
	_disabled: {
		color: 'neutral.gray868686',
	},
});

const Button = defineStyleConfig({
	variants: {
		modimaGhost,
		modimaSolid,
		modimaOutline,
	},
});

export default Button;
