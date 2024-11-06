import React, {createContext, useContext} from 'react';

import useGetWishlist from 'modules/wishlist/useGetWishlist';
import useAddToWishlist from 'modules/wishlist/useAddToWishlist';
import useRemoveFromWishlist from 'modules/wishlist/useRemoveFromWishlist';

export const WishlistContext = createContext({});

export function WishlistProvider({children}) {
	const getWishlistProps = useGetWishlist();
	const addToWishlistProps = useAddToWishlist(getWishlistProps.onGetWishlist);
	const removeFromWishlistProps = useRemoveFromWishlist(
		getWishlistProps.onGetWishlist
	);

	const value = {
		...getWishlistProps,
		...addToWishlistProps,
		...removeFromWishlistProps,
	};

	return (
		<WishlistContext.Provider value={value}>
			{children}
		</WishlistContext.Provider>
	);
}

export const useWishlist = () => useContext(WishlistContext);
