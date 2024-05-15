import {Stack} from '@chakra-ui/react';
import React from 'react';

function DashboardListFooter(props) {
	const {direction, children, ...rest} = props;

	return (
		<Stack direction={direction} {...rest}>
			{children}
		</Stack>
	);
}

export default DashboardListFooter;
