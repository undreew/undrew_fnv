import React from 'react';
import theme from 'styles/themes';

import {AuthProvider} from 'contexts/AuthContext';
import {ChakraBaseProvider} from '@chakra-ui/react';
import {LayoutProvider} from 'contexts/LayoutContext';

import 'utils/axios-config';

function AppProviders({children}) {
	return (
		<AuthProvider>
			<LayoutProvider>
				<ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
			</LayoutProvider>
		</AuthProvider>
	);
}

export default AppProviders;
