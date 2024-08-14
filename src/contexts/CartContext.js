import useGetCart from 'modules/cart/useGetCart';
import React, {createContext, useContext} from 'react';

export const CartContext = createContext({});

export function CartProvider({children}) {
	// fetch all items
	const getCartProps = useGetCart(); // isFetching, data, onGetCart

	const value = {
		...getCartProps,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
