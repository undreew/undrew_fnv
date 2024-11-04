import React, {createContext, useContext} from 'react';

import useGetWishlist from 'modules/wishlist/useGetWishlist';
import useAddToWishlist from 'modules/wishlist/useAddToWishlist';

export const WishlistContext = createContext({});

export function WishlistProvider({children}) {
	const getWishlistProps = useGetWishlist();
	const addToWishlistProps = useAddToWishlist();

	const value = {
		...getWishlistProps,
		...addToWishlistProps,
	};

	return (
		<WishlistContext.Provider value={value}>
			{children}
		</WishlistContext.Provider>
	);
}

export const useWishlist = () => useContext(WishlistContext);
