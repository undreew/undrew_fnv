import {defineStyle, defineStyleConfig} from '@chakra-ui/react';

const boxy = defineStyle({
	bgColor: 'white',
	borderRadius: 0,
	p: '0.5rem 1.25rem',
});

const Badge = defineStyleConfig({
	variants: {boxy},
});

export default Badge;
