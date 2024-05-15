import {extendTheme} from '@chakra-ui/react';

import Input from './style.components/input';
import Button from './style.components/button';
import Accordion from './style.components/accordion';
import Checkbox from './style.components/checkbox';
import Select from './style.components/select';
import Card from './style.components/card';

const theme = extendTheme({
	config: {
		initialColorMode: 'system',
		useSystemColorMode: true,
	},

	fonts: {
		heading: 'Montserrat, sans-serif',
		body: 'League Spartan, sans-serif',
	},

	components: {
		Input,
		Button,
		Accordion,
		Checkbox,
		Select,
		Card,
	},

	/*
	 for text style properties
	 USAGE: <Text textStyle='display1'>Label<Text/>
	 */
	textStyles: {
		display1: {
			fontSize: ['4rem'], // 64px
			fontWeight: 'bold',
		},
		display2: {
			fontSize: ['3.5rem'], // 56px
			fontWeight: 'bold',
		},
		h1: {
			fontSize: ['1.75rem', '2.25rem', '2.75rem'], // 44px
			fontWeight: 'bold',
		},
		h2: {
			fontSize: ['1.5rem', '2rem', '2.5rem'], // 40px
			fontWeight: 'bold',
		},
		h3: {
			fontSize: ['1.125rem', '1.5rem', '2rem'], // 32px
			fontWeight: 'semibold',
		},
		h4: {
			fontSize: ['1.5rem'], // 24px
			fontWeight: 'bold',
		},
		h5: {
			fontSize: ['1.25rem'], // 20px
			fontWeight: 'bold',
		},
		h6: {
			fontSize: ['1rem'], // 16px
			fontWeight: 'bold',
		},

		bodyXl: {
			fontSize: ['1.25rem'], // 20px
			fontWeight: 'regular',
		},
		bodyLg: {
			fontSize: ['1.125rem'], // 18px
			fontWeight: 'regular',
		},
		bodyMd: {
			fontSize: ['1rem'], // 16px
			fontWeight: 'regular',
		},
		bodySm: {
			fontSize: ['0.875rem'], // 14px
			fontWeight: 'regular',
		},
		bodyXs: {
			fontSize: ['0.75rem'], // 12px
			fontWeight: 'regular',
		},

		captionLg: {
			fontSize: ['0.875rem'], // 14px
			fontWeight: 'semibold',
		},
		captionMd: {
			fontSize: ['0.75rem'], // 12px
			fontWeight: 'regular',
		},
		captionSm: {
			fontSize: ['0.625rem'], // 10px
			fontWeight: 'semibold',
		},

		buttonLg: {
			fontSize: ['1rem'], // 16px
			fontWeight: 'regular',
		},
		buttonSm: {
			fontSize: ['0.875rem'], // 14px
			fontWeight: 'regular',
		},

		overlineLg: {
			fontSize: ['1rem'], // 16px
			fontWeight: 'regular',
		},
		overlineSm: {
			fontSize: ['0.75rem'], // 12px
			fontWeight: 'semibold',
		},

		// LOGO
		logo: {
			fontSize: ['1.125rem', '1.5rem', '2rem'], //   '18px', '24px', '32px'
			fontFamily: 'body',
			fontWeight: 'bold',
		},
	},

	colors: {
		base: {
			primary: '#748C70',
			black: '#0C0C0C',
			white: '#FFFFFF',
			background: '#FFFFFF',
		},

		primary: {
			25: '#F0F2EF',
			50: '#D1D9CF',
			100: '#B2BFAF',
			200: '#A2B39F',
			300: '#93A690',
			400: '#839980',
			500: '#748C70',
			600: '#5A6D57',
			700: '#404E3E',
			750: '#343E32',
			800: '#272F25',
			900: '#0D100C',
		},

		neutral: {
			white: '#FFFFFF',
			black: '#0C0C0C',
			grayF9F9F9: '#F9F9F9',
			grayEDEDED: '#EDEDED',
			grayDFDFDF: '#DFDFDF',
			grayCBCBCB: '#CBCBCB',
			grayADADAD: '#ADADAD',
			gray868686: '#868686',
			gray606060: '#606060',
			gray404040: '#404040',
			gray202020: '#202020',
			gray0C0C0C: '#0C0C0C',
		},

		success: {
			main: '#00966D',
			light: '#00BA88',
			bg: '#F3FDFA',
		},

		warning: {
			main: '#E09126',
			light: '#ECBB77',
			bg: '#F7E4C9',
		},

		error: {
			main: '#C30000',
			light: '#ED2E2E',
			bg: '#FFF2F2',
		},
	},

	semanticTokens: {},
});

export default theme;
