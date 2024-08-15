import React from 'react';
import theme from 'styles/themes';

import {CartProvider} from 'contexts/CartContext';
import {AuthProvider} from 'contexts/AuthContext';
import {ChakraBaseProvider} from '@chakra-ui/react';
import {LayoutProvider} from 'contexts/LayoutContext';
import {SnackbarProvider} from 'notistack';

function AppProviders({children}) {
	return (
		<SnackbarProvider
			maxSnack={3}
			anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		>
			<CartProvider>
				<AuthProvider>
					<LayoutProvider>
						<ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
					</LayoutProvider>
				</AuthProvider>
			</CartProvider>
		</SnackbarProvider>
	);
}

export default AppProviders;
