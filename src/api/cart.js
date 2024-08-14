import {fetcher} from 'utils/fetcher';

export const getCartById = () => {
	return fetcher('GET', `/cart`);
};
