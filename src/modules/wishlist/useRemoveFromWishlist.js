import {postWishlistRemove} from 'api/wishlist';
import {enqueueSnackbar} from 'notistack';
import {useState} from 'react';

function useRemoveFromWishlist(callback) {
	const [isRemoving, setIsRemoving] = useState(false);

	async function onRemoveFromWishlist(formData) {
		setIsRemoving(true);
		try {
			await postWishlistRemove(formData);

			enqueueSnackbar('Item removed from wishlist', {
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
		onRemoveFromWishlist,
	};
}

export default useRemoveFromWishlist;
