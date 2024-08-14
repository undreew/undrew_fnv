import {useState} from 'react';
import {postAddToCart} from 'api/cart';

function useAddToCart() {
	const [isAdding, setIsAdding] = useState(false);

	async function onAddToCart(data) {
		setIsAdding(true);
		try {
			await postAddToCart(data);
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
