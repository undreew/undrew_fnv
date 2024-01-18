import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
	config: {
		initialColorMode: 'system',
		useSystemColorMode: true,
	},

	fonts: {
		heading: 'Montserrat, sans-serif',
		body: 'League Spartan, sans-serif',
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
});

export default theme;
