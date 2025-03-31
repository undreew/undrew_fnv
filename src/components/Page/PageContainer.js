import React from 'react';
import {Container} from '@chakra-ui/react';

import {DEFAULT_CONTAINER_BREAKPOINTS} from 'constants/breakpoints';

function PageContainer({children, ...rest}) {
	return (
		<Container maxW={DEFAULT_CONTAINER_BREAKPOINTS} {...rest}>
			{children}
		</Container>
	);
}

export default PageContainer;
