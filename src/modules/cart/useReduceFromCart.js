import {patchCartReduceItem} from 'api/cart';
import {enqueueSnackbar} from 'notistack';
import {useState} from 'react';

function useReduceFromCart(callback) {
	const [isReducing, setIsReducing] = useState(false);

	async function onReduceItem(data) {
		setIsReducing(true);
		try {
			await patchCartReduceItem(data);
			enqueueSnackbar('Item reduced', {
				variant: 'success',
				autoHideDuration: 1500,
			});

			callback && callback();
		} catch ({message}) {
			enqueueSnackbar(message, {variant: 'error', autoHideDuration: 1500});
		} finally {
			setIsReducing(false);
		}
	}

	return {
		isReducing,
		onReduceItem,
	};
}

export default useReduceFromCart;
