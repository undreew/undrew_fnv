import {fetcher} from 'utils/fetcher';

export const getWishlist = () => {
	return fetcher('GET', 'wishlist');
};

export const postWishlistAdd = (formData) => {
	return fetcher('POST', 'wishlist/add', formData);
};

export const postWishlistRemove = (formData) => {
	return fetcher('DELETE', 'wishlist/remove', formData);
};
