import React, {createContext, useContext} from 'react';

export const CartContext = createContext({});

export function CartProvider({children}) {
	const value = {};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
