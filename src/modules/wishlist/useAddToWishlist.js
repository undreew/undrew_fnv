import {useState} from 'react';
import {enqueueSnackbar} from 'notistack';
import {postWishlistAdd} from 'api/wishlist';

function useAddToWishlist(callback) {
	const [isAdding, setIsAdding] = useState(false);

	async function onAddToWishlist(formData) {
		setIsAdding(true);
		try {
			await postWishlistAdd(formData);

			enqueueSnackbar('Item added to wishlist', {
				variant: 'success',
				autoHideDuration: 1500,
			});
			callback && callback();
		} catch ({message}) {
			enqueueSnackbar(message, {variant: 'error', autoHideDuration: 1500});
		} finally {
			setIsAdding(false);
		}
	}

	return {
		isAdding,
		onAddToWishlist,
	};
}

export default useAddToWishlist;
