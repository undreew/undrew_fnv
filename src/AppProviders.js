import React from 'react';
import theme from 'styles/themes';

import {SnackbarProvider} from 'notistack';
import {ChakraBaseProvider} from '@chakra-ui/react';

import {CartProvider} from 'contexts/CartContext';
import {AuthProvider} from 'contexts/AuthContext';
import {LayoutProvider} from 'contexts/LayoutContext';
import {WishlistProvider} from 'contexts/WishlistContext';

import 'utils/axios-config';

function AppProviders({children}) {
	return (
		<SnackbarProvider
			maxSnack={3}
			anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		>
			<AuthProvider>
				<WishlistProvider>
					<CartProvider>
						<LayoutProvider>
							<ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
						</LayoutProvider>
					</CartProvider>
				</WishlistProvider>
			</AuthProvider>
		</SnackbarProvider>
	);
}

export default AppProviders;
