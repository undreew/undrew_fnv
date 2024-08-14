import {useState} from 'react';
import {postAddToCart} from 'api/cart';

function useAddToCart(callback) {
	const [isAdding, setIsAdding] = useState(false);

	async function onAddToCart(data) {
		setIsAdding(true);
		try {
			await postAddToCart(data);
			callback && callback();
		} catch (error) {
			console.log(error);
		} finally {
			setIsAdding(false);
		}
	}

	return {
		isAdding,
		onAddToCart,
	};
}

export default useAddToCart;
