import React, {createContext, useContext} from 'react';

import useGetCart from 'modules/cart/useGetCart';
import useAddToCart from 'modules/cart/useAddToCart';
import useRemoveFromCart from 'modules/cart/useRemoveFromCart';

export const CartContext = createContext({});

export function CartProvider({children}) {
	const getCartProps = useGetCart(); // isFetching, data, onGetCart
	const addToCartProps = useAddToCart(getCartProps.onGetCart); // isAdding, onAddToCart
	const removeFromCartProps = useRemoveFromCart(getCartProps.onGetCart); // isRemoving, onRemoveItem

	const value = {
		...getCartProps,
		...addToCartProps,
		...removeFromCartProps,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
