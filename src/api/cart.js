import {fetcher} from 'utils/fetcher';

export const getCartById = () => {
	return fetcher('GET', `/cart`);
};

export const postAddToCart = (data) => {
	return fetcher('POST', '/cart/add-to-cart', data);
};

export const deleteRemoveItem = (data) => {
	return fetcher('DELETE', '/cart/remove-item', data);
};
