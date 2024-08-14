import React from 'react';
import theme from 'styles/themes';

import {CartProvider} from 'contexts/CartContext';
import {AuthProvider} from 'contexts/AuthContext';
import {ChakraBaseProvider} from '@chakra-ui/react';
import {LayoutProvider} from 'contexts/LayoutContext';

function AppProviders({children}) {
	return (
		<CartProvider>
			<AuthProvider>
				<LayoutProvider>
					<ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
				</LayoutProvider>
			</AuthProvider>
		</CartProvider>
	);
}

export default AppProviders;
