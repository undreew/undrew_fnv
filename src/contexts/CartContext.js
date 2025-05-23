import React, {createContext, useContext} from 'react';

import useGetCart from 'modules/cart/useGetCart';
import useAddToCart from 'modules/cart/useAddToCart';
import useRemoveFromCart from 'modules/cart/useRemoveFromCart';
import useReduceFromCart from 'modules/cart/useReduceFromCart';

export const CartContext = createContext({});

export function CartProvider({children}) {
	const getCartProps = useGetCart(); // isFetching, data, onGetCart
	const addToCartProps = useAddToCart(getCartProps.onGetCart); // isAdding, onAddToCart
	const removeFromCartProps = useRemoveFromCart(getCartProps.onGetCart); // isRemoving, onRemoveItem
	const reduceFormCart = useReduceFromCart(getCartProps.onGetCart); // isReducing, onReduceItem

	const {data} = getCartProps;
	const {items, total_quantity, grand_total} = data;

	const value = {
		...getCartProps,
		...addToCartProps,
		...removeFromCartProps,
		...reduceFormCart,

		cartItems: items,
		cartGrandTotal: grand_total,
		cartTotalQuantity: total_quantity,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
