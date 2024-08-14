import React, {createContext, useContext} from 'react';

import useGetCart from 'modules/cart/useGetCart';
import useAddToCart from 'modules/cart/useAddToCart';

export const CartContext = createContext({});

export function CartProvider({children}) {
	// fetch all items
	const getCartProps = useGetCart(); // isFetching, data, onGetCart
	const addToCartProps = useAddToCart(); // isAdding, onAddToCart

	const value = {
		...getCartProps,
		...addToCartProps,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
