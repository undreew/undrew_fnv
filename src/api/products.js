import {fetcher} from 'utils/fetcher';

export const getProducts = (params) => {
	return fetcher('GET', 'products/load-more', params);
};

export const getProductById = (id) => {
	return fetcher('GET', `products/${id}`);
};
