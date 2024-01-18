import React from 'react';

import theme from 'styles/themes';
import {ChakraBaseProvider} from '@chakra-ui/react';
import {LayoutProvider} from 'contexts/LayoutContext';

function AppProviders({children}) {
	return (
		<LayoutProvider>
			<ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
		</LayoutProvider>
	);
}

export default AppProviders;
