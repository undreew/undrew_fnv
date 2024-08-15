import {useState} from 'react';
import {postAddToCart} from 'api/cart';
import {enqueueSnackbar} from 'notistack';

function useAddToCart(callback) {
	const [isAdding, setIsAdding] = useState(false);

	async function onAddToCart(data) {
		setIsAdding(true);
		try {
			await postAddToCart(data);
			callback && callback();
		} catch ({message}) {
			enqueueSnackbar(message, {variant: 'error', autoHideDuration: 1500});
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
