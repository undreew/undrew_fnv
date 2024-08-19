import {useState} from 'react';
import {deleteRemoveItem} from 'api/cart';
import {enqueueSnackbar} from 'notistack';

function useRemoveFromCart(callback) {
	const [isRemoving, setIsRemoving] = useState(false);

	async function onRemoveItem(formData) {
		setIsRemoving(true);
		try {
			await deleteRemoveItem(formData);
			enqueueSnackbar('Item removed from cart', {
				variant: 'success',
				autoHideDuration: 1500,
			});

			callback && callback();
		} catch ({message}) {
			enqueueSnackbar(message, {variant: 'error', autoHideDuration: 1500});
		} finally {
			setIsRemoving(false);
		}
	}

	return {
		isRemoving,
		onRemoveItem,
	};
}

export default useRemoveFromCart;
